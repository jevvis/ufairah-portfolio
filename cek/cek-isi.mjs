// Pemeriksa isi ORDER 4 (apt. Ufairah Norazizah). Jalankan: node cek/cek-isi.mjs
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8')
let bad = 0
const ok = (name, cond, detail = '') => { if (!cond) bad++; console.log((cond ? 'LULUS ' : 'GAGAL ') + name + (cond || !detail ? '' : ' -> ' + detail)) }

const walk = (d, out = []) => { for (const f of fs.readdirSync(d, { withFileTypes: true })) { if (['node_modules', '.next', 'cek'].includes(f.name)) continue; const p = path.join(d, f.name); f.isDirectory() ? walk(p, out) : out.push(p) } return out }
const code = walk(root).filter((f) => /\.(tsx?|css|json)$/.test(f) && !f.endsWith('package-lock.json'))

// 1. kunci ID dan EN sama
const tr = read('contexts/translations.ts')
const idBlock = tr.slice(tr.indexOf('  id: {'), tr.indexOf('  en: {'))
const enBlock = tr.slice(tr.indexOf('  en: {'))
const keys = (s) => [...s.matchAll(/^\s+'([\w.]+)':/gm)].map((m) => m[1])
const idK = keys(idBlock), enK = keys(enBlock)
ok('kunci teks ID dan EN sama', idK.length === enK.length && idK.every((k) => enK.includes(k)), idK.filter((k) => !enK.includes(k)).concat(enK.filter((k) => !idK.includes(k))).join(', '))

// 2. semua t('...') yang dipakai terdefinisi
const used = new Set()
for (const f of code.filter((f) => /\.tsx$/.test(f))) for (const m of fs.readFileSync(f, 'utf8').matchAll(/\bt\('([\w.]+)'\)/g)) used.add(m[1])
ok("semua t('kunci') terdefinisi", [...used].every((k) => idK.includes(k)), [...used].filter((k) => !idK.includes(k)).join(', '))

// 3. gambar yang dirujuk ada
const refs = new Set()
for (const f of code.filter((f) => /\.tsx?$/.test(f))) for (const m of fs.readFileSync(f, 'utf8').matchAll(/['"`](\/(?:projects\/)?[\w\-./]+\.(?:jpg|jpeg|png|pdf|svg))['"`]/g)) refs.add(m[1])
const missing = [...refs].filter((r) => !fs.existsSync(path.join(root, 'public', r)))
ok('semua gambar/berkas yang dirujuk ada di public/', missing.length === 0, missing.join(', '))

// 4. tidak ada sisa data template lama
const stale = /hafizah|kariadi|stefani|richard|cikokol|bio farma|universitas indonesia/i
const hits = code.filter((f) => stale.test(fs.readFileSync(f, 'utf8')) && !/Sections\.tsx$/.test(f) ? true : false).map((f) => path.relative(root, f))
const secHits = [...fs.readFileSync(path.join(root, 'components/Sections.tsx'), 'utf8').matchAll(/(hafizah|kariadi|stefani|richard|cikokol|bio farma|universitas indonesia)/gi)].length
ok('tidak ada nama/instansi Hafizah tersisa di kode', hits.length === 0 && secHits === 0, hits.join(', ') + (secHits ? ' Sections.tsx x' + secHits : ''))

// 5. gambar publik yang tidak dipakai (hanya informasi)
const pub = walk(path.join(root, 'public')).map((f) => '/' + path.relative(path.join(root, 'public'), f).split(path.sep).join('/'))
const unused = pub.filter((f) => !refs.has(f))
console.log('INFO berkas public yang belum dirujuk: ' + (unused.join(', ') || '-'))

// 6. data kontak sesuai CV
const contact = read('components/Contact.tsx')
ok('kontak sesuai CV (email, WhatsApp, LinkedIn)', /ufairahnorazizah09@gmail\.com/.test(contact) && /6283847058681/.test(contact) && /ufairah-norazizah-340034322/.test(contact))
console.log(bad ? 'GAGAL (' + bad + ')' : 'OK')
process.exit(bad ? 1 : 0)

import { createFFmpeg, fetchFile } from "https://unpkg.com/@ffmpeg/ffmpeg@0.12.6/dist/ffmpeg.min.js";

const els = {
  script: document.getElementById('script'),
  scenes: document.getElementById('scenes'),
  btnSplit: document.getElementById('btnSplit'),
  btnAutoTime: document.getElementById('btnAutoTime'),
  btnSRT: document.getElementById('btnSRT'),
  voiceSelect: document.getElementById('voiceSelect'),
  btnSpeak: document.getElementById('btnSpeak'),
  btnStopSpeak: document.getElementById('btnStopSpeak'),
  btnRec: document.getElementById('btnRec'),
  btnStopRec: document.getElementById('btnStopRec'),
  voiceFile: document.getElementById('voiceFile'),
  musicFile: document.getElementById('musicFile'),
  musicVol: document.getElementById('musicVol'),
  imageFiles: document.getElementById('imageFiles'),
  timeline: document.getElementById('timeline'),
  btnAssemble: document.getElementById('btnAssemble'),
  ffmpegStatus: document.getElementById('ffmpegStatus'),
  downloadArea: document.getElementById('downloadArea'),
  title: document.getElementById('title'),
  description: document.getElementById('description'),
  tags: document.getElementById('tags'),
  btnSuggestMeta: document.getElementById('btnSuggestMeta'),
  btnSaveMeta: document.getElementById('btnSaveMeta'),
  plan: document.getElementById('plan'),
  miniCode: document.getElementById('miniCode'),
  btnUnlockMini: document.getElementById('btnUnlockMini'),
  ownerEmail: document.getElementById('ownerEmail'),
  btnOwner: document.getElementById('btnOwner'),
  btnGapiInit: document.getElementById('btnGapiInit'),
  btnSignIn: document.getElementById('btnSignIn'),
  btnSignOut: document.getElementById('btnSignOut'),
  uploadFile: document.getElementById('uploadFile'),
  btnYTUpload: document.getElementById('btnYTUpload'),
  uploadStatus: document.getElementById('uploadStatus'),
  confirmation: document.getElementById('confirmation'),
  videoLink: document.getElementById('videoLink'),
  googleClientId: document.getElementById('googleClientId'),
  googleApiKey: document.getElementById('googleApiKey'),
  btnSaveSettings: document.getElementById('btnSaveSettings'),
  saveMsg: document.getElementById('saveMsg'),
};

let sceneList = [];
let voiceBlob = null, musicBlob = null, imageBlob = null;
let recorder = null, ffmpeg = null;

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const now = () => new Date().toISOString().replace('T',' ').split('.')[0];

function splitScriptToScenes(text) {
  const raw = text.split(/\n{2,}|(?:\r?\n)+/).map(s => s.trim()).filter(Boolean);
  const out = [];
  for (const block of raw) {
    const lines = block.split(/\n/).map(s => s.trim()).filter(Boolean);
    if (lines.length > 1) out.push(...lines);
    else out.push(block);
  }
  return out;
}
function wordsPerMinuteEstimate(text) {
  const words = (text.match(/\b\w+\b/g) || []).length;
  const seconds = Math.max(2, Math.round(words / 2.5));
  return seconds;
}
function renderScenes() {
  els.scenes.innerHTML = "";
  let total = 0;
  sceneList.forEach((s) => {
    const li = document.createElement('li');
    li.textContent = `${s.text}  (${(s.durMs/1000).toFixed(1)}s)`;
    els.scenes.appendChild(li);
    total += s.durMs;
  });
  els.timeline.textContent = `${(total/1000).toFixed(1)}s total`;
}
function enforcePlanDuration(totalSeconds) {
  const plan = els.plan.value;
  const owner = (els.ownerEmail.value || "").trim().toLowerCase();
  if (owner === "s506981@gmail.com") return true;
  if (plan === "Free") return totalSeconds <= 20;
  if (plan === "Mini Test") {
    const unlocked = localStorage.getItem("tbf_mini_unlocked") === "1";
    return unlocked ? totalSeconds <= 60 : totalSeconds <= 20;
  }
  return true;
}

els.btnSplit.addEventListener('click', () => {
  const parts = splitScriptToScenes(els.script.value || "");
  sceneList = parts.map(p => ({ text: p, durMs: 3000 }));
  renderScenes();
});
els.btnAutoTime.addEventListener('click', () => {
  sceneList = sceneList.map(s => ({ ...s, durMs: wordsPerMinuteEstimate(s.text) * 1000 }));
  renderScenes();
});
els.btnSRT.addEventListener('click', () => {
  if (!sceneList.length) return alert("No scenes. Split script first.");
  let t = 0;
  const toStamp = (ms) => {
    const s = Math.floor(ms/1000), msR = ms%1000;
    const hh = String(Math.floor(s/3600)).padStart(2,'0');
    const mm = String(Math.floor((s%3600)/60)).padStart(2,'0');
    const ss = String(s%60).padStart(2,'0');
    return `${hh}:${mm}:${ss},${String(msR).padStart(3,'0')}`;
  };
  let out = "";
  sceneList.forEach((sc, i) => {
    const start = t;
    const end = t + sc.durMs;
    out += `${i+1}\n${toStamp(start)} --> ${toStamp(end)}\n${sc.text}\n\n`;
    t = end;
  });
  const blob = new Blob([out], { type: "text/plain;charset=utf-8" });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = "subtitles.srt";
  a.click();
});

let voices = [];
function populateVoices() {
  voices = window.speechSynthesis.getVoices();
  els.voiceSelect.innerHTML = voices.map(v => `<option value="${v.name}">${v.name} (${v.lang})</option>`).join('');
}
populateVoices();
window.speechSynthesis.onvoiceschanged = populateVoices;
els.btnSpeak.addEventListener('click', () => {
  const text = (els.script.value || "").trim() || "This is a voice preview.";
  const utter = new SpeechSynthesisUtterance(text);
  const sel = voices.find(v => v.name === els.voiceSelect.value);
  if (sel) utter.voice = sel;
  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
});
els.btnStopSpeak.addEventListener('click', () => speechSynthesis.cancel());

els.btnRec.addEventListener('click', async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  recorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
  const chunks = [];
  recorder.ondataavailable = e => chunks.push(e.data);
  recorder.onstop = () => {
    voiceBlob = new Blob(chunks, { type: 'audio/webm' });
    alert(`Recorded voice: ${(voiceBlob.size/1024).toFixed(1)} KB`);
  };
  recorder.start();
});
els.btnStopRec.addEventListener('click', () => {
  if (recorder && recorder.state !== "inactive") recorder.stop();
});
els.voiceFile.addEventListener('change', () => {
  const f = els.voiceFile.files?.[0];
  if (f) voiceBlob = f;
});
els.musicFile.addEventListener('change', () => {
  const f = els.musicFile.files?.[0];
  if (f) musicBlob = f;
});
els.imageFiles.addEventListener('change', () => {
  const f = els.imageFiles.files?.[0];
  if (f) imageBlob = f;
});

let ffmpeg = null;
async function ensureFFmpeg() {
  if (ffmpeg) return ffmpeg;
  ffmpeg = createFFmpeg({
    corePath: "https://unpkg.com/@ffmpeg/core@0.12.6/dist/ffmpeg-core.js",
    log: true,
  });
  els.ffmpegStatus.textContent = "Loading FFmpeg… (first run can take ~20–40s)";
  await ffmpeg.load();
  els.ffmpegStatus.textContent = "FFmpeg ready.";
  return ffmpeg;
}
async function assembleMP4() {
  if (!imageBlob) return alert("Please add at least one image.");
  if (!voiceBlob) return alert("Record or import a voice audio file first.");
  const f = await ensureFFmpeg();
  els.ffmpegStatus.textContent = "Preparing files…";
  f.FS('writeFile', 'image.jpg', await fetchFile(imageBlob));
  f.FS('writeFile', 'voice.webm', await fetchFile(voiceBlob));
  if (musicBlob) f.FS('writeFile', 'music.webm', await fetchFile(musicBlob));

  els.ffmpegStatus.textContent = "Converting audio…";
  await f.run('-i', 'voice.webm', '-vn', '-acodec', 'mp3', 'voice.mp3');
  if (musicBlob) {
    await f.run('-i', 'music.webm', '-vn', '-acodec', 'mp3', 'music.mp3');
    const vol = parseFloat(document.getElementById('musicVol').value || '0.2');
    await f.run(
      '-i','voice.mp3','-i','music.mp3',
      '-filter_complex', `[0:a]volume=1.0[a0];[1:a]volume=${vol}[a1];[a0][a1]amix=inputs=2:duration=longest:dropout_transition=2[a]`,
      '-map','[a]','-ac','2','-c:a','aac','-b:a','192k','mix.m4a'
    );
  }
  const audioIn = musicBlob ? 'mix.m4a' : 'voice.mp3';
  els.ffmpegStatus.textContent = "Rendering video…";
  await f.run(
    '-loop','1','-framerate','30','-i','image.jpg',
    '-i', audioIn,
    '-c:v','libx264','-tune','stillimage',
    '-c:a','aac','-b:a','192k',
    '-pix_fmt','yuv420p',
    '-vf','scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2',
    '-shortest',
    'output.mp4'
  );
  const data = f.FS('readFile','output.mp4');
  const blob = new Blob([data.buffer], { type: 'video/mp4' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.textContent = "Download MP4";
  a.download = (els.title.value || 'truthbeforefire') + ".mp4";
  els.downloadArea.innerHTML = "";
  els.downloadArea.appendChild(a);
  els.ffmpegStatus.textContent = "Done.";
}
els.btnAssemble.addEventListener('click', async () => {
  const est = sceneList.reduce((s,sc)=>s+sc.durMs,0)/1000;
  if (!enforcePlanDuration(est)) return alert("Plan limit exceeded. Free=20s, Mini=60s.");
  try { await assembleMP4(); } catch (e) {
    console.error(e); els.ffmpegStatus.textContent = "Error: " + e.message;
  }
});

els.btnSuggestMeta.addEventListener('click', () => {
  const txt = (els.script.value || "").trim();
  if (!txt) return;
  const words = (txt.toLowerCase().match(/\b[a-z]{4,}\b/g) || []);
  const freq = {}; words.forEach(w => freq[w] = (freq[w]||0)+1);
  const top = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([w])=>w);
  if (!els.title.value) els.title.value = (top.slice(0,3).join(' ') || "Truth Before Fire").replace(/\b\w/g, c=>c.toUpperCase());
  if (!els.description.value) els.description.value = "Created with TruthBeforeFire Browser Studio — faith-based AI video maker.\n\n" + txt.slice(0,800);
  if (!els.tags.value) els.tags.value = top.join(', ');
});
els.btnSaveMeta.addEventListener('click', () => {
  const meta = { title: els.title.value, description: els.description.value, tags: els.tags.value };
  localStorage.setItem('tbf_meta', JSON.stringify(meta));
  alert('Saved.');
});
els.btnUnlockMini.addEventListener('click', () => {
  const code = (els.miniCode.value || "").trim();
  if (code === "MINI-TEST-199") {
    localStorage.setItem("tbf_mini_unlocked","1");
    alert("Mini Test unlocked for this browser.");
  } else alert("Invalid code.");
});
els.btnOwner.addEventListener('click', () => {
  const email = (els.ownerEmail.value || "").trim().toLowerCase();
  if (email === "s506981@gmail.com") {
    localStorage.setItem("tbf_owner","1");
    alert("Owner override set on this browser.");
  } else alert("Owner email mismatch.");
});

// ---- YouTube Upload (client-side OAuth) ----
let gapiLoaded = false;
function loadGapi() {
  return new Promise((resolve, reject) => {
    if (gapiLoaded) return resolve();
    if (!window.gapi) return reject(new Error("gapi not available"));
    window.gapi.load('client:auth2', () => { gapiLoaded = true; resolve(); });
  });
}
async function initGapi() {
  await loadGapi();
  const clientId = els.googleClientId.value || localStorage.getItem('tbf_client_id') || "";
  const apiKey = els.googleApiKey.value || localStorage.getItem('tbf_api_key') || "";
  if (!clientId || !apiKey) { alert("Enter CLIENT_ID and API Key in Settings."); return; }
  await gapi.client.init({
    apiKey, clientId,
    scope: 'https://www.googleapis.com/auth/youtube.upload',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
  });
}
els.btnGapiInit.addEventListener('click', initGapi);
els.btnSignIn.addEventListener('click', async () => { if (!gapiLoaded) await initGapi(); await gapi.auth2.getAuthInstance().signIn(); els.uploadStatus.textContent = "Signed in at " + now(); });
els.btnSignOut.addEventListener('click', async () => { if (!gapiLoaded) await initGapi(); await gapi.auth2.getAuthInstance().signOut(); els.uploadStatus.textContent = "Signed out"; });

async function uploadToYouTube(file) {
  if (!gapiLoaded) await initGapi();
  const accessToken = gapi.auth.getToken().access_token;
  const metadata = {
    snippet: {
      title: els.title.value || 'TruthBeforeFire',
      description: els.description.value || '',
      tags: (els.tags.value || '').split(',').map(s=>s.trim()).filter(Boolean),
      categoryId: '22'
    },
    status: { privacyStatus: 'private' }
  };
  els.uploadStatus.textContent = "Uploading… please wait.";
  const boundary = 'foo_bar_baz';
  const delimiter = "\\r\\n--" + boundary + "\\r\\n";
  const close_delim = "\\r\\n--" + boundary + "--";
  const data = await file.arrayBuffer();
  const body =
    delimiter + 'Content-Type: application/json; charset=UTF-8\\r\\n\\r\\n' +
    JSON.stringify(metadata) + delimiter +
    'Content-Type: video/mp4\\r\\n\\r\\n' +
    new Blob([data]) + close_delim;
  const res = await fetch('https://www.googleapis.com/upload/youtube/v3/videos?uploadType=multipart&part=snippet,status', {
    method: 'POST',
    headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }),
    body
  });
  if (!res.ok) throw new Error("YouTube upload failed: " + await res.text());
  return await res.json();
}
els.btnYTUpload.addEventListener('click', async () => {
  try {
    const file = els.uploadFile.files?.[0];
    if (!file) return alert("Select an MP4 file first.");
    const est = sceneList.reduce((s,sc)=>s+sc.durMs,0)/1000;
    if (!enforcePlanDuration(est)) return alert("Plan limit exceeded. Shorten the video or upgrade plan.");
    const out = await uploadToYouTube(file);
    els.confirmation.classList.remove('hidden');
    const url = "https://youtube.com/watch?v=" + out.id;
    els.videoLink.innerHTML = `<a href="${url}" target="_blank" rel="noopener">Open on YouTube</a>`;
    els.uploadStatus.textContent = "Upload complete.";
  } catch (e) { console.error(e); els.uploadStatus.textContent = e.message; }
});

function loadSettings() {
  const m = localStorage.getItem('tbf_meta');
  if (m) { const meta = JSON.parse(m); els.title.value = meta.title||""; els.description.value = meta.description||""; els.tags.value = meta.tags||""; }
  const cid = localStorage.getItem('tbf_client_id'); const key = localStorage.getItem('tbf_api_key');
  if (cid) els.googleClientId.value = cid; if (key) els.googleApiKey.value = key;
}
loadSettings();
els.btnSaveSettings.addEventListener('click', () => {
  localStorage.setItem('tbf_client_id', els.googleClientId.value || "");
  localStorage.setItem('tbf_api_key', els.googleApiKey.value || "");
  els.saveMsg.textContent = "Saved at " + now();
});

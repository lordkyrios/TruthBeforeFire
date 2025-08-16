// components/MultiScenePlayer.tsx
import { useEffect, useState, useRef } from 'react';

interface Props {
  script: string;
  characters: any[];
}

export default function MultiScenePlayer({ script, characters }: Props) {
  return (
    <div className="min-h-screen bg-black text-white p-8 font-mono">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-yellow-400">🔥 Truth Before Fire</h1>
        <p className="mb-6">Welcome to the AI Cinematic Studio for fully generated, multi-language, emotion-aware, and YouTube-ready storytelling.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">🎬 Script Input</h2>
            <textarea
              defaultValue={`[char=John][mood=warm][cam=pan-left] A sunrise over misty mountains inspires us.\n[char=Mary][mood=cool][cam=dolly-zoom] Night rain over neon streets hums with motion.`}
              rows={6}
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">🎼 Music + Visual Packs</h2>
            <input type="file" multiple className="mb-2 block" />
            <input type="file" accept=".zip" className="mb-2 block" />
            <button className="bg-yellow-500 px-4 py-2 rounded text-black font-bold">Index</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div>
            <label className="block font-semibold text-yellow-200">Resolution</label>
            <select className="w-full bg-gray-800 text-white p-2 rounded mt-1">
              <option>1280x720</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-yellow-200">Parallax</label>
            <input type="number" defaultValue={0.25} className="w-full bg-gray-800 text-white p-2 rounded mt-1" />
          </div>
          <div>
            <label className="block font-semibold text-yellow-200">WPM</label>
            <input type="number" defaultValue={140} className="w-full bg-gray-800 text-white p-2 rounded mt-1" />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-yellow-300 mb-4">🎥 Output Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-green-500 text-black px-4 py-2 rounded">Preview</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Record</button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded">MP4</button>
            <button className="bg-pink-500 text-white px-4 py-2 rounded">Thumbnail</button>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-yellow-300 mb-4">📤 YouTube Upload</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Client ID" className="bg-gray-800 text-white p-2 rounded" />
            <input type="text" placeholder="Video Title" className="bg-gray-800 text-white p-2 rounded" />
            <input type="text" placeholder="Tags (comma separated)" className="bg-gray-800 text-white p-2 rounded" />
            <select className="bg-gray-800 text-white p-2 rounded">
              <option>private</option>
              <option>public</option>
              <option>unlisted</option>
            </select>
            <textarea placeholder="Description" rows={3} className="bg-gray-800 text-white p-2 rounded col-span-full" />
          </div>
          <div className="flex gap-4 mt-4">
            <button className="bg-yellow-500 text-black px-4 py-2 rounded">Sign In</button>
            <button className="bg-red-600 text-white px-4 py-2 rounded">Upload</button>
            <p className="text-sm text-gray-400">🔒 Not signed in</p>
          </div>
        </div>
      </div>
    </div>
  );
}

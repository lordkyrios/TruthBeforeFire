const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// API Routes

// Voice options API endpoint
app.get('/api/voice-options', (req, res) => {
    // In a real production environment, this would fetch from a database or external API
    const voiceOptions = {
        male: [
            { id: 'm1', language: 'english', name: 'Matthew' },
            { id: 'm2', language: 'english', name: 'James' },
            { id: 'm3', language: 'spanish', name: 'Carlos' },
            { id: 'm4', language: 'french', name: 'Pierre' },
            { id: 'm5', language: 'german', name: 'Hans' },
            { id: 'm6', language: 'italian', name: 'Marco' },
            { id: 'm7', language: 'portuguese', name: 'João' },
            { id: 'm8', language: 'russian', name: 'Dmitri' },
            { id: 'm9', language: 'japanese', name: 'Takashi' },
            { id: 'm10', language: 'chinese', name: 'Li Wei' }
        ],
        female: [
            { id: 'f1', language: 'english', name: 'Emma' },
            { id: 'f2', language: 'english', name: 'Olivia' },
            { id: 'f3', language: 'spanish', name: 'Sofia' },
            { id: 'f4', language: 'french', name: 'Marie' },
            { id: 'f5', language: 'german', name: 'Anna' },
            { id: 'f6', language: 'italian', name: 'Giulia' },
            { id: 'f7', language: 'portuguese', name: 'Maria' },
            { id: 'f8', language: 'russian', name: 'Natasha' },
            { id: 'f9', language: 'japanese', name: 'Yuki' },
            { id: 'f10', language: 'chinese', name: 'Lin' }
        ]
    };
    
    res.json(voiceOptions);
});

// Video generation API endpoint
app.post('/api/generate-video', (req, res) => {
    // Extract data from request body
    const { text, voiceGender, voiceLanguage, imageStyle, bgMusic } = req.body;
    
    // Validate required fields
    if (!text || !voiceGender || !voiceLanguage || !imageStyle) {
        return res.status(400).json({
            success: false,
            message: 'Missing required fields'
        });
    }
    
    // In a real production environment, this would:
    // 1. Process the text to generate images
    // 2. Create voiceover using selected voice
    // 3. Combine images and audio into a video
    // 4. Add background music if selected
    // 5. Return a video ID or URL
    
    // For now, we'll simulate a successful response
    // In a real implementation, this would be an asynchronous process
    // with progress updates via WebSockets or polling
    
    // Log the request for debugging
    console.log('Video generation request:', {
        text: text.substring(0, 100) + (text.length > 100 ? '...' : ''),
        voiceGender,
        voiceLanguage,
        imageStyle,
        bgMusic: bgMusic || 'none'
    });
    
    // Simulate processing time
    setTimeout(() => {
        // Return success response
        res.json({
            success: true,
            message: 'Video generation started',
            videoId: 'vid_' + Date.now(),
            estimatedTime: '30 seconds'
        });
    }, 1000); // 1 second delay to simulate initial processing
});

// Catch-all route to serve the main HTML file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Set port for the server
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Open http://localhost:${PORT} in your browser`);
});
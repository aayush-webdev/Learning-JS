# 🎂 Birthday Queen - Interactive Heart Tree Animation 💕

A beautiful, interactive birthday website featuring an animated pink heart-shaped tree that grows when clicked. Perfect for sending birthday wishes in a creative and memorable way!

![Birthday Tree Animation](img.png)

## ✨ Features

- 🌸 **Interactive Heart Tree Animation** - Click the heart seed to watch a beautiful pink tree grow with heart-shaped blossoms
- 💬 **Typewriter Birthday Message** - Cyan-colored animated text reveals heartfelt birthday wishes
- 🎵 **Background Music** - Automatic audio playback for enhanced experience
- 📱 **Fully Mobile Responsive** - Works perfectly on all devices from 320px to large desktops
- 🎨 **Beautiful Dark Aesthetic** - Black background with vibrant pink and cyan colors
- ⏱️ **Day Counter** - Displays elapsed time in an elegant format

## 🚀 Live Demo

Simply open `index.html` in your browser - no server or build process required!

```bash
# Clone or download the repository
git clone [your-repo-url]
cd her-birthday-main

# Open in browser
# Windows:
start index.html

# macOS:
open index.html

# Linux:
xdg-open index.html
```

## 📱 Responsive Design

The website is **fully mobile responsive** and tested across multiple devices:

| Device Type | Screen Size | Status |
|-------------|-------------|--------|
| 📱 Mobile Portrait | 320px - 480px | ✅ Perfect |
| 📱 Mobile Landscape | 481px - 767px | ✅ Perfect |
| 📱 Tablet | 768px - 1023px | ✅ Perfect |
| 💻 Desktop | 1024px+ | ✅ Perfect |

**Key Responsive Features:**
- Zero horizontal scrolling on any device
- Centered layout on mobile with vertical content stacking
- Touch-friendly 44px minimum tap targets
- Original desktop layout preserved on large screens
- Canvas animation scales perfectly maintaining aspect ratio

## 🎨 Customization

### Change the Birthday Message

Edit the text in `index.html` (lines 33-39):

```html
<span class="say">Hey you 💞</span><br>
<span class="say">Happy Birthday 🎈</span><br>
<span class="say">May God bless you 🍀</span><br>
<!-- Add your own messages here -->
```

### Change Colors

Edit `file/default.css`:

```css
/* Birthday message text color */
#code {
  color: rgb(196, 255, 255);  /* Cyan color */
}

/* Change the pink color constant in love.js */
var color = '#d23f57ff';  /* Pink heart color */
```

### Change Background Music

Replace `aud.mp3` with your own audio file, or disable autoplay in `index.html`:

```html
<!-- Remove autoplay attribute to disable auto music -->
<audio height="100" width="100" id="myAudio">
  <source src="aud.mp3" type="audio/mp3" />
</audio>
```

### Adjust Day Counter

Edit the clock text in `index.html` (line 43):

```html
<span id="clock">577 days 0 hours 0 minutes 0 seconds</span>
```

## 🛠️ Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Responsive design with Flexbox and modern properties
- **JavaScript** - Canvas-based animations
- **Jscex** - Asynchronous animation framework
- **jQuery** - DOM manipulation and utilities

## 📁 Project Structure

```
her-birthday-main/
│
├── index.html              # Main HTML file
├── aud.mp3                 # Background music
├── img.png                 # Preview/thumbnail image
├── img2.png                # Additional image asset
│
└── file/
    ├── default.css         # Responsive styles
    ├── love.js             # Canvas animation logic
    ├── function.js         # Utility functions
    ├── jquery.min.js       # jQuery library
    ├── jscex.min.js        # Jscex core
    ├── jscex-parser.js     # Jscex parser
    ├── jscex-jit.js        # Jscex JIT compiler
    ├── jscex-builderbase.min.js  # Jscex builder base
    ├── jscex-async.min.js        # Jscex async
    └── jscex-async-powerpack.min.js  # Jscex powerpack
```

## 🎯 How It Works

1. **Initial State**: Page loads with a clickable pink heart "seed" on black background
2. **User Interaction**: User clicks the heart to trigger the animation sequence
3. **Animation Sequence**:
   - Heart seed scales and moves down
   - Tree trunk grows from the bottom
   - Pink heart-shaped blossoms bloom across the canvas
   - Canvas content shifts to create final composition
   - Birthday message appears with typewriter effect
4. **Final State**: Beautiful pink tree with animated text message

## 🎨 Animation Details

The heart tree is drawn using HTML5 Canvas and mathematical equations:
- Heart shape: `x = 16sin³(t)`, `y = 13cos(t) - 5cos(2t) - 2cos(3t) - cos(4t)`
- Bézier curves for smooth branch growth
- Random bloom positioning within heart-shaped area
- Asynchronous animation flow using Jscex framework

## 📱 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome | ✅ Fully supported |
| Firefox | ✅ Fully supported |
| Safari | ✅ Fully supported |
| Edge | ✅ Fully supported |
| Opera | ✅ Fully supported |
| Mobile Safari | ✅ Fully supported |
| Chrome Mobile | ✅ Fully supported |

**Requirements:**
- HTML5 Canvas support
- ES5 JavaScript support
- CSS3 support for responsive design

## 🚀 Performance

- **Lightweight**: Total size ~1.2MB (mostly audio file)
- **No Build Process**: Works directly in browser
- **Pure CSS Animations**: Smooth 60fps performance
- **Optimized Canvas**: Efficient drawing algorithms
- **Mobile Optimized**: Touch-friendly and responsive

## 📝 License

Feel free to use this project for personal birthday wishes! 🎉

## 🙏 Credits

- Canvas heart algorithm inspired by mathematical love curves
- Jscex framework for async animations
- Design concept: Romantic heart tree animation

## 💡 Tips for Best Experience

1. **Use headphones** for better audio experience
2. **Full screen mode** for immersive viewing
3. **Click the heart** to start the magical animation
4. **Share the link** to surprise your loved ones
5. **Customize the message** to make it personal

## 🐛 Troubleshooting

**Music not playing?**
- Check browser autoplay policies
- Click anywhere on the page to enable audio
- Verify `aud.mp3` file exists

**Animation not working?**
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify all files in `file/` directory are present

**Layout broken on mobile?**
- Clear browser cache
- Ensure viewport meta tag is present
- Check CSS file loaded correctly

## 🎊 Make It Your Own

This website is perfect for:
- 🎂 Birthday surprises
- 💝 Valentine's Day messages
- 💍 Anniversary celebrations
- 💕 Romantic gestures
- 🎁 Special occasion greetings

---

**Made with ❤️ for birthday celebrations**

*Spread love and joy with this interactive animation!* ✨🎉
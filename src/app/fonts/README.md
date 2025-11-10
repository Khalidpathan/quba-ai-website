# Fonts Directory

## Required Font File

**IMPORTANT:** You must add your Kern-StandardRegular font file to this directory for the font to work.

### Where to Get the Font

**Kern-StandardRegular** may be a proprietary or custom font. Here are options to obtain it:

1. **If you have the font file already:**
   - Check your design files, brand assets, or font library
   - Look for files from your designer or brand guidelines

2. **If you need to purchase/license it:**
   - Contact the font foundry or designer
   - Check font marketplaces:
     - [MyFonts](https://www.myfonts.com/)
     - [Fonts.com](https://www.fonts.com/)
     - [Adobe Fonts](https://fonts.adobe.com/)
     - [Google Fonts](https://fonts.google.com/) (for free alternatives)

3. **Alternative fonts (if Kern-StandardRegular is unavailable):**
   - **Kernl Grotesk** - Similar geometric sans-serif
   - **Inter** - Modern, clean sans-serif (free)
   - **Space Grotesk** - Geometric sans-serif (free)
   - **Poppins** - Modern sans-serif (free on Google Fonts)

### File Name
Place your font file with one of these exact names:
- `Kern-StandardRegular.woff2` (recommended - best compression)
- `Kern-StandardRegular.woff`
- `Kern-StandardRegular.ttf`
- `Kern-StandardRegular.otf`

### Location
The font file should be placed at:
```
src/app/fonts/Kern-StandardRegular.woff2
```

### Supported Formats
- `.woff2` (recommended - smallest file size, best browser support)
- `.woff` (good fallback)
- `.ttf` (TrueType - larger file size)
- `.otf` (OpenType - larger file size)

### Converting Font Formats
If you have a `.ttf` or `.otf` file, you can convert it to `.woff2` using:
- Online converters: [CloudConvert](https://cloudconvert.com/), [FontSquirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- Command line tools: `woff2_compress` (from Google's woff2 tools)

### Current Configuration
The font is currently configured to look for `Kern-StandardRegular.woff2` first.
If you have a different format, update the path in `src/app/layout.tsx`.

### Multiple Weights
If you have multiple font weights (e.g., Regular, Bold, Light), you can add them to the `localFont` configuration in `src/app/layout.tsx` by adding additional entries to the `src` array.


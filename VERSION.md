# Version Management

## How It Works

**GitHub Actions automatically manages all versioning.** You never need to edit `version.json` manually.

### Version Format
- `DD-MM-YYYY-VV` (e.g., `26-01-2025-01`)
- Same day = increments build number (`01` → `02` → `03`)
- New day = resets to `01`

### Description
- **Always uses your latest commit message**
- Example: `"Fix favicon and add social media buttons"`

### Workflow
1. You make changes and commit with a descriptive message
2. Push to GitHub
3. GitHub Actions automatically:
   - Generates new version number
   - Uses your commit message as description
   - Builds and deploys

### Checking Live Version
**Browser Console (F12):**
```
🐛 Made in Bugs - Version Info
  Version: 26-01-2025-02
  Description: Fix favicon and add social media buttons
  Deployed at: 2025-01-26T15:30:45.123Z
```

**View Page Source:**
```html
<!-- Made in Bugs Version: 26-01-2025-02 -->
```

## Important
- ❌ **Don't edit `version.json` manually** - GitHub Actions controls it
- ✅ **Write good commit messages** - they become version descriptions
- ✅ **Check F12 console** to verify deployments

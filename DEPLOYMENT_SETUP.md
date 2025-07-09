# GitHub Pages Deployment Setup

## Error Fix: "Not Found" and "Get Pages site failed"

The error occurs because GitHub Pages isn't enabled or configured properly. Follow these steps:

## Step 1: Enable GitHub Pages

1. Go to your repository: `https://github.com/bijutharakan/georgia-trip`
2. Click on the **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
5. Click **Save**

## Step 2: Verify Workflow Permissions

1. In your repository, go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, ensure:
   - ✅ **"Read and write permissions"** is selected
   - ✅ **"Allow GitHub Actions to create and approve pull requests"** is checked
3. Click **Save**

## Step 3: Re-run the Workflow

1. Go to **Actions** tab in your repository
2. Click on the failed workflow run
3. Click **"Re-run all jobs"**

## Alternative: Manual Pages Setup

If GitHub Actions still fails, use the traditional method:

1. Go to **Settings** → **Pages**
2. Under **Source**, select **"Deploy from a branch"**
3. Choose **"main"** branch and **"/ (root)"** folder
4. Click **Save**

Your site will be available at: `https://bijutharakan.github.io/georgia-trip/`

## Troubleshooting

- **Repository must be public** for GitHub Pages to work with free accounts
- **Wait 5-10 minutes** after enabling Pages for the first deployment
- **Check Actions tab** for deployment status and logs

## Quick Commands

```bash
# Check if Pages is enabled
gh api repos/bijutharakan/georgia-trip/pages

# Enable Pages via CLI (if authenticated)
gh api repos/bijutharakan/georgia-trip/pages -X POST -f source=actions
```
---
description: Create git commit and push to remote
allowed-tools: Bash(git:*)
---

Create a git commit with all uncommitted changes and push to remote.

## Process

1. **Verify Changes**
   - Run `git status` to see what will be committed
   - Run `git diff` to review the actual changes

2. **Check Recent History**
   - Run `git log --oneline -3` to see recent commits for style reference

3. **Create Commit**
   - Draft a clear, concise commit message explaining the "why"
   - Stage all changes with `git add -A`
   - Create commit with proper formatting:
     ```
     [Concise commit message]

     [Optional detailed explanation if needed]

     🤖 Generated with [Claude Code](https://claude.com/claude-code)

     Co-Authored-By: Claude <noreply@anthropic.com>
     ```
   - Verify commit success with `git status`

4. **Push to Remote**
   - Push to remote with `git push`
   - Confirm push was successful

## Notes
- Follow the repository's existing commit message style
- Don't commit files with secrets (.env, credentials, etc.)
- If no changes to commit, inform the user

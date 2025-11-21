---
description: Review code and commit with push if no critical issues
allowed-tools: Bash(git:*), Read, Glob, Grep
---

Perform a comprehensive code review and create a git commit if everything looks good.

## Process

1. **Run Code Review**
   - Execute the `/review` command to analyze all uncommitted changes
   - Provide a detailed review report following all review criteria

2. **Present Findings**
   - Show critical issues, important issues, suggestions, and positive notes
   - Clearly indicate if there are blocking issues

3. **Decision Point**
   - If **critical issues** exist: Stop and ask user to fix them first
   - If **only suggestions/minor issues**: Proceed to commit step

4. **Create Commit**
   - Run `git status` and `git diff` to understand changes
   - Check recent commit history for style reference
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

5. **Push to Remote**
   - Automatically push to remote with `git push`
   - Confirm push was successful

## Notes
- Never commit if critical security or breaking issues are found
- Always explain what changed and why in the commit message
- Follow the repository's existing commit message style
- Don't commit files with secrets (.env, credentials, etc.)

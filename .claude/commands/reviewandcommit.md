---
description: Comprehensive code review of uncommitted changes
allowed-tools: Bash(git:*), Read, Glob, Grep, SlashCommand
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

4. **Create Commit and Push**
   - Execute the `/commit` command to create commit and push to remote

## Notes
- Never commit if critical security or breaking issues are found
- Always explain what changed and why in the commit message
- Follow the repository's existing commit message style
- Don't commit files with secrets (.env, credentials, etc.)

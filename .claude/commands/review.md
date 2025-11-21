---
description: Comprehensive code review of uncommitted changes
allowed-tools: Bash(git:*), Read, Glob, Grep
---

Review all uncommitted changes in the git repository with a comprehensive analysis:

## Review Criteria

### Code Quality
- Check for code smells and anti-patterns
- Identify overly complex logic that needs simplification
- Look for magic numbers or hardcoded values
- Verify proper variable and function naming

### Best Practices
- Check React best practices (proper hooks usage, component structure)
- Verify proper error boundaries and fallbacks
- Look for prop validation issues
- Check for proper key usage in lists

### Security
- Identify potential XSS vulnerabilities
- Check for exposed sensitive data
- Verify proper input validation
- Look for insecure external dependencies or CDN usage

### Separation of Concerns
- Verify clean separation of style (CSS), content (JSON), and structure (JSX)
- Check for inline styles that should be in stylesheet
- Identify hardcoded content that should be in config files
- Look for business logic mixed with presentation

### Scalability
- Assess component reusability
- Check if code structure supports future features
- Identify tight coupling that limits flexibility
- Verify modular architecture

### Performance
- Look for unnecessary re-renders
- Check for inefficient loops or operations
- Identify missing memoization opportunities
- Verify lazy loading where appropriate

### Accessibility
- Check for semantic HTML usage
- Verify ARIA labels where needed
- Check keyboard navigation support
- Look for color contrast issues

### Error Handling
- Identify missing try-catch blocks
- Check for unhandled promise rejections
- Verify graceful fallbacks for failed data fetching
- Look for console errors

### Consistency
- Verify naming conventions across files
- Check for consistent code patterns
- Look for formatting inconsistencies
- Verify consistent component structure

### Maintainability
- Identify code duplication
- Look for overly long functions or components
- Check if complex logic needs comments
- Verify proper file organization

### Documentation
- Check if complex logic has explanatory comments
- Verify README is up to date
- Look for missing JSDoc where helpful

### Dependencies
- Check for unused imports
- Verify CDN versions are appropriate
- Look for missing dependencies

## Output Format

Provide findings in this structure:
1. **Critical Issues** - Must fix (security, breaking bugs)
2. **Important Issues** - Should fix (best practices, scalability)
3. **Suggestions** - Nice to have (optimizations, refactoring)
4. **Positive Notes** - What's done well

For each issue, include:
- File and line number
- Clear description
- Why it matters
- Suggested fix

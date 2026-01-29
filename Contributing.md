# Contributing to Free Public APIs

Thank you for your interest in contributing to this project!

## How to Contribute

### Adding a New API

1. Fork the repository
2. Add the API to the appropriate category in `README.md`
3. Create a working example in the `examples/` folder
4. Test your example to ensure it works
5. Submit a pull request

### API Requirements

All APIs must:
- Be free to use
- Require NO authentication (no API keys, OAuth, etc.)
- Be publicly accessible
- Return JSON or easily parsable data
- Have stable uptime

### Example Format

When adding an example, follow this structure:

```javascript
const axios = require('axios');

async function getExampleData() {
    try {
        const response = await axios.get('https://api.example.com/endpoint');
        console.log('Example Data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}
```

### README Format

Add APIs to README.md following this format:

```markdown
| [API Name](https://api-url.com) | Brief description | `GET https://api-url.com/endpoint` |
```

## Code of Conduct

- Be respectful and professional
- Test all contributions
- Keep examples simple and clear
- Document any special requirements

## Questions?

Open an issue for any questions or suggestions!

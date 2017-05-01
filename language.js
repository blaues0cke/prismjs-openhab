Prism.languages.openhab = {
    'comment':  /\/\/.*/,
    'atrule':   {
        pattern:    /((^|[\r\n]+)[^ ]+=).*(?:$|[\r\n]+)/,
        lookbehind: true
    },
    'constant': /ON|OFF/,
    'string':   {
        pattern: /"[^"]*"/,
        greedy:  true
    },
    'function': [
        /(^|[\r\n]+)([A-Z]{1}[a-z]+)/,
        /(^|[\r\n\s]+)(sitemap|rule|when|then|end|Item|Frame|Default|Switch|Slider|Text)/, // TODO: this will match too often + does not match all keywords
        /Item|changed to|changed/ // TODO: this will match too often + does not match all keywords
    ],
    'variable': /(^|[\r\n]+)[a-zA-Z0-9._]+(?==)/
};
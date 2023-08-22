function string_to_md5(text) {
    return require('crypto').createHash('md5').update(text).digest('hex');
}


import React from 'react';

String.prototype.toFriendlyName = function(type) {
    return this.replace(/([A-Z]+)/g, ' $1').trim().replace(` ${type}`, '');
}

String.prototype.toClassName = function() {
    return this.replace(/([A-Z]+)/g, ' $1').trim().toLowerCase().replace(/ /g, '-');
}

String.prototype.toTitleName = function() {
    return this.replace(/([A-Z]+)/g, ' $1').trim();
}


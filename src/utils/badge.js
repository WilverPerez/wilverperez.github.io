class Badge {
    
    addBadged(label) {
        return `<span class="badge badge-primary bg-${label}-badge">${label}</span>`;
    }
}
class Badge {
    
    addBadged(label, color) {
        return `<span class="badge ${color ? '' : 'badge-primary'} m-1 text-white" style="background:${color};">${label}</span>`;
    }
}
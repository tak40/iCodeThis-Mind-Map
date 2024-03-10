/** @format */

const centralNode = document.getElementById('central-node')
const memory = document.getElementById('memory')
const intuitive = document.getElementById('intuitive')
const collaboration = document.getElementById('collaboration')
const clutter = document.getElementById('clutter')
const focus = document.getElementById('focus')
const overview = document.getElementById('overview')

const createLeaderLine = (source, target, color) => {
    return new LeaderLine(source, target, {
        color: color,
        size: 4,
        startPlug: 'behind',
    })
}

createLeaderLine(centralNode, memory, '#f6eee9')
createLeaderLine(centralNode, intuitive, '#e4f3ef')
createLeaderLine(centralNode, collaboration, '#e2ebf8')
createLeaderLine(centralNode, clutter, '#f5e5eb')
createLeaderLine(centralNode, focus, '#f6eee9')
createLeaderLine(centralNode, overview, '#e4f3ef')

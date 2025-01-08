/**
 * ObservIO Dashboard - Main JavaScript
 * Author: [Your Name]
 * Version: 1.0.0
 * Last Updated: 2025-01-08
 *
 * Description:
 * Core JavaScript functionality for the ObservIO dashboard.
 * Handles sidebar toggle, chart initialization, and responsive behaviors.
 *
 * Dependencies:
 * - Bootstrap 5.3.0
 * - ECharts 5.4.3
 */

// DOM Elements
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
const sidebarToggle = document.getElementById('sidebar-toggle');

// Toggle sidebar collapse
function toggleSidebar() {
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('expanded');
}

// Event Listeners
sidebarToggle.addEventListener('click', toggleSidebar);

// Initialize Charts
document.addEventListener('DOMContentLoaded', function() {
    // Revenue Chart
    const revenueChart = echarts.init(document.getElementById('revenueChart'));
    const revenueOption = {
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(22, 29, 49, 0.9)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            textStyle: { color: '#D0D2D6' }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show: true,
            borderColor: 'rgba(255, 255, 255, 0.1)'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            axisLine: {
                lineStyle: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            axisLabel: {
                color: '#B4B7BD',
                fontSize: 12,
                padding: [8, 0]
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            splitLine: {
                lineStyle: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            axisLabel: {
                color: '#B4B7BD',
                fontSize: 12,
                formatter: '${value}k'
            }
        },
        series: [{
            name: 'Revenue',
            type: 'line',
            smooth: true,
            symbolSize: 8,
            data: [30, 45, 35, 50, 48, 60],
            itemStyle: { color: '#7367F0' },
            lineStyle: { width: 3 },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(115, 103, 240, 0.2)'
                }, {
                    offset: 1,
                    color: 'rgba(115, 103, 240, 0)'
                }])
            }
        }]
    };
    revenueChart.setOption(revenueOption);

    // Users Chart
    const usersChart = echarts.init(document.getElementById('usersChart'));
    const usersOption = {
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(22, 29, 49, 0.9)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            textStyle: { color: '#D0D2D6' }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show: true,
            borderColor: 'rgba(255, 255, 255, 0.1)'
        },
        xAxis: {
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            axisLine: {
                lineStyle: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            axisLabel: {
                color: '#B4B7BD',
                fontSize: 12,
                padding: [8, 0]
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            splitLine: {
                lineStyle: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            axisLabel: {
                color: '#B4B7BD',
                fontSize: 12
            }
        },
        series: [{
            name: 'Users',
            type: 'bar',
            data: [150, 200, 180, 250, 220, 300],
            itemStyle: {
                color: '#28C76F',
                borderRadius: [4, 4, 0, 0]
            },
            barWidth: '60%'
        }]
    };
    usersChart.setOption(usersOption);

    // Handle window resize
    window.addEventListener('resize', function() {
        revenueChart.resize();
        usersChart.resize();
    });
});

// Initialize all tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Notification Badge Update (Demo)
let notificationCount = 3;
let messageCount = 5;

function updateBadges() {
    const notificationBadge = document.querySelector('.nav-item:nth-child(1) .badge');
    const messageBadge = document.querySelector('.nav-item:nth-child(2) .badge');
    
    notificationBadge.textContent = notificationCount;
    messageBadge.textContent = messageCount;
}

// Update timestamps in activity feed
function updateTimestamps() {
    const timestamps = document.querySelectorAll('.activity-details span');
    timestamps.forEach((timestamp, index) => {
        const times = ['5 minutes ago', '15 minutes ago', '30 minutes ago'];
        timestamp.textContent = times[index];
    });
}

// Initial calls
updateBadges();
updateTimestamps();

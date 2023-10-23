export const filterData = (sampleData, searchQuery) => {
    const filteredContents = sampleData.filter(content =>
        content.date.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filteredContents;
};

export const sortContents = (contents, order) => {
    const sortedContents = [...contents];
    if (order === 'Agua Coins') {
        sortedContents.sort((a, b) => b.coins - a.coins);
    } else if (order === 'Total Credits') {
        sortedContents.sort((a, b) => b.credit - a.credit);
    } else if (order === 'Latest') {
        sortedContents.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (order === 'Oldest') {
        sortedContents.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
    return sortedContents;
};

export const handleItemClick = (customerName, isSelected, data, onItemSelected) => {
    if (customerName && !isSelected) {
        onItemSelected(data);
    }
};

export const handleActiveItem = (item, setItem) => {
    setItem(item)
}

export const iconPath = (item, navItem, fillIcon, outlineIcon) => {
    return item === navItem ? fillIcon : outlineIcon
}

export const formattedDate = (format, currentDateTime) => {
    return format(currentDateTime, 'MMM. dd, yyyy, E')
}

export const formattedTime = (format, currentDateTime) => {
    return format(currentDateTime, 'hh:mm a')
}

export const filterInventoryItems = (inventoryContents, getStockStatus, tab) => {
    if (tab === 'All') {
        return inventoryContents;
    } else {
        return inventoryContents.filter((item) => {
            const stockStatus = getStockStatus(item.stock, item.max);
            return stockStatus === tab;
        });
    }
};

export const getStockStatus = (stock, max) => {
    if (stock <= 0) {
        return 'Out of Stock';
    } else if (stock <= max * 0.2) {
        return 'Low Stock';
    } else if (stock <= max * 0.5) {
        return 'Half Stock';
    } else {
        return 'Full Stock';
    }
};
export const filteredLogisticData = (logisticsData, selectedTab) => {
    return logisticsData.filter((data) => {
        if (selectedTab === 'All') {
            return true; // Show all data
        }
        return data.progress.toLowerCase() === selectedTab.toLowerCase();
    })
}
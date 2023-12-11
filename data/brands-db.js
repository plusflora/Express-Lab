const brands = [
    {brand: 'Duotone', cool: true},
    {brand: 'North', cool: true},
    {brand: 'Reedin', cool: true},
    {brand: 'Core', cool: false}
]

module.exports = {
    getAll: function() {
        return brands
    }
}

//this is where's I'm storing the info for the list on the /brands page, I'm exporting it through the module.exports 
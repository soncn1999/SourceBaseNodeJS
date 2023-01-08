import homeService from '../services/homeService';

let getHomepage = (req, res) => {
    return homeService.getHomepageService();
}

module.exports = {
    getHomepage: getHomepage
}
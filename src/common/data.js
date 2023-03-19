const getSortOrder = (prop) => {
    return function (a, b) {
        if (moment(a[prop]).format('YYYY-MM-DD HH:mm') < moment(b[prop]).format('YYYY-MM-DD HH:mm')) {
            return 1;
        } else if (moment(a[prop]).format('YYYY-MM-DD HH:mm') > moment(b[prop]).format('YYYY-MM-DD HH:mm')) {
            return -1;
        }
        return 0;
    }
}
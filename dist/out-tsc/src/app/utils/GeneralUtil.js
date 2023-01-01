var GeneralUtil = /** @class */ (function () {
    function GeneralUtil() {
    }
    GeneralUtil.getDateWithTimeZone = function (strDate) {
        if (strDate) {
            var date = new Date(parseInt(strDate));
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = (hours != 0) ? hours : 12;
            minutes = (minutes < 10) ? '0' + minutes : minutes;
            return date.toLocaleDateString() + " " + hours + ':' + minutes + ' ' + ampm;
        }
        return null;
    };
    return GeneralUtil;
}());
export { GeneralUtil };
//# sourceMappingURL=GeneralUtil.js.map
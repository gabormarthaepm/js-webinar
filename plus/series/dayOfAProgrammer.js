function dayOfProgrammer(year) {

    let normalDate = "13.09.";
    let leapDate = "12.09.";
    if (year >= 1700 && year <= 1917) {
        if (!(year % 4)) {
            return leapDate + year;
        }
        return normalDate + year;
    }
    if (year >= 1919 && year <= 2700) {
        if (!(year % 4) && !!(year % 100) || !(year % 400)) {
            return leapDate + year;
        }
        return normalDate + year;
    }
    return "26.09." + year;
}
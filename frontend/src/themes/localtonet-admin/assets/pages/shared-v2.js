function getNameBool(flag) {
    if (flag)
        return "Yes";
    return "No";
}
function getIpRestrictionNameBool(data) {
    if (data == 1)
        return "Allowed";
    return "Blocked";
}

function getNameFromStatus(data) {
    if (data == 1)
        return "Active";
    return "Passive";
}

function getNameFromConnectionStatus(data) {
    if (data === "true" || data === "True")
        return "ON";
    else if (data === "false" || data === "False")
        return "OFF";

    return "-";
}

function getCssNameFromConnectionStatus(data) {
    if (data === "true" || data === "True")
        return "success";
    else if (data === "false" || data === "False")
        return "danger";

    return "warning";
}

function getCssNameFromIsReserved(data) {
    if (data)
        return "success";
    return "danger";
}
function getCssNameFromStatus(data) {
    if (data == 1)
        return "success";
    return "danger";
}
function getCssNameFromOrderStatus(data) {
    if (data == 1) {
        return "success";
    }
    else if (data == 0) {
        return "warning";
    }

    return "danger";
}

function pageCountCalc(dataLength, dataStart) {
    if (dataStart == 0) {
        return 1;
    }

    return Math.ceil(dataStart / dataLength) + 1;
}

var jqueryPageLengthOptions = [[10, 25, 50, 100, 200, 400, 100000], [10, 25, 50, 100, 200, 400, 'All']];
(function ($) {

    $.fn.serializeFormToObject = function (camelCased = false) {
        var data = $(this).serializeArray();
        $(':disabled[name]', this).each(function () {
            data.push({ name: this.name, value: $(this).val() });
        });
        var obj = {};
        data.map(function (x) { obj[x.name] = x.value; });
        if (camelCased && camelCased === true) {
            return convertToCamelCasedObject(obj);
        }
        return obj;
    };

    if ($.blockUI) {
        $.blockUI.defaults.baseZ = 2000;
    }

    $.validator.setDefaults({
        highlight: (el) => {
            $(el).addClass('is-invalid');
        },
        unhighlight: (el) => {
            $(el).removeClass('is-invalid');
        },
        errorElement: 'p',
        errorClass: 'text-danger',
        errorPlacement: (error, element) => {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    function convertToCamelCasedObject(obj) {
        var newObj, origKey, newKey, value;
        if (obj instanceof Array) {
            return obj.map(value => {
                if (typeof value === 'object') {
                    value = convertToCamelCasedObject(value);
                }
                return value;
            });
        } else {
            newObj = {};
            for (origKey in obj) {
                if (obj.hasOwnProperty(origKey)) {
                    newKey = (
                        origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey
                    ).toString();
                    value = obj[origKey];
                    if (
                        value instanceof Array ||
                        (value !== null && value.constructor === Object)
                    ) {
                        value = convertToCamelCasedObject(value);
                    }
                    newObj[newKey] = value;
                }
            }
        }
        return newObj;
    }

    function initAdvSearch() {
        $('.abp-advanced-search').each((i, obj) => {
            var $advSearch = $(obj);
            setAdvSearchDropdownMenuWidth($advSearch);
            setAdvSearchStopingPropagations($advSearch);
        });
    }

    initAdvSearch();

    $(window).resize(() => {
        clearTimeout(window.resizingFinished);
        window.resizingFinished = setTimeout(() => {
            initAdvSearch();
        }, 500);
    });

    function setAdvSearchDropdownMenuWidth($advSearch) {
        var advSearchWidth = 0;
        $advSearch.each((i, obj) => {
            advSearchWidth += parseInt($(obj).width(), 10);
        });
        $advSearch.find('.dropdown-menu').width(advSearchWidth)
    }

    function setAdvSearchStopingPropagations($advSearch) {
        $advSearch.find('.dd-menu, .btn-search, .txt-search')
            .on('click', (e) => {
                e.stopPropagation();
            });
    }

    $.fn.clearForm = function () {
        var $this = $(this);
        $this.validate().resetForm();
        $('[name]', $this).each((i, obj) => {
            $(obj).removeClass('is-invalid');
        });
        $this[0].reset();
    };
    //$.validator.addMethod('ipcheck', function (value, element, domain) {
    //    var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    //    if (value.match(ipformat)) {
    //        return true;
    //    }
    //    return false;
    //});

    $(document).on('paste', '.withoutWhiteSpace', function (e) {
        e.preventDefault();
        var withoutSpaces = e.originalEvent.clipboardData.getData('Text');
        withoutSpaces = withoutSpaces.replace(/\s+/g, '');
        $(this).val(withoutSpaces);
    });

    $(document).on('keydown', '.withoutWhiteSpace', function (e) {
        if (e.keyCode == 32) {
            return false;
        }
    });

})(jQuery);
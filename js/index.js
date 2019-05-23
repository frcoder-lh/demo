;
$(function() {
    // var form main param
    var form = $('form'),
        subBtn = $('footer').find('button'),
        validate = $('#validate'),
        validateVal = validate.find('h3');
    // submit function
    subBtn.on('click', function() {
        // var form input & select param
        var sexVal = $('input[name="sex"]:checked').val(),
            ageVal = $('input[name="age"]:checked').val(),
            eduVal = $('input[name="education"]:checked').val(),
            ideVal = $('input[name="identity"]:checked').val(),
            incomeVal = $('select[name="income"] option:checked').val(),
            businessVal = $('input[name="business"]:checked').val(),
            protectVal = $('input[name="protect"]:checked').val(),
            competeVal = $('input[name="compete"]:checked').val(),
            supportVal = $('input[name="support"]:checked').val(),
            no10_01_city_Val = $('select[name="no10_city_01"] option:checked').val(),
            no10_02_city_Val = $('select[name="no10_city_02"] option:checked').val(),
            no10_03_city_Val = $('select[name="no10_city_03"] option:checked').val(),
            no11_01_city_Val = $('select[name="no11_city_01"] option:checked').val(),
            no11_02_city_Val = $('select[name="no11_city_02"] option:checked').val(),
            no11_03_city_Val = $('select[name="no11_city_03"] option:checked').val(),
            no10_01_county_Val = $('select[name="no10_county_01"] option:checked').val(),
            no10_02_county_Val = $('select[name="no10_county_02"] option:checked').val(),
            no10_03_county_Val = $('select[name="no10_county_03"] option:checked').val(),
            no11_01_county_Val = $('select[name="no11_county_01"] option:checked').val(),
            no11_02_county_Val = $('select[name="no11_county_02"] option:checked').val(),
            no11_03_county_Val = $('select[name="no11_county_03"] option:checked').val(),
            que_1Val = $('input[name="question_1"]:checked').val(),
            que_2Val = $('input[name="question_2"]:checked').val();

        // validate
        Validate(sexVal,"第1项未选择");
        Validate(ageVal,"第2项未选择");
        Validate(eduVal,"第3项未选择");
        Validate(ideVal,"第4项未选择");
        Validate(businessVal,"第6项未选择");
        Validate(protectVal,"第7项未选择");
        Validate(competeVal,"第8项未选择");
        Validate(supportVal,"第9项未选择");
        Validate(que_1Val,"第12项未选择");
        Validate(que_2Val,"第13项未选择");

        Validate_sel(incomeVal,"第5项未选择");
        Validate_sel(no10_01_city_Val,"第10项未选择完全");
        Validate_sel(no10_02_city_Val,"第10项未选择完全");
        Validate_sel(no10_03_city_Val,"第10项未选择完全");
        Validate_sel(no10_01_county_Val,"第10项未选择完全");
        Validate_sel(no10_02_county_Val,"第10项未选择完全");
        Validate_sel(no10_03_county_Val,"第10项未选择完全");
        Validate_sel(no11_01_city_Val,"第11项未选择完全");
        Validate_sel(no11_02_city_Val,"第11项未选择完全");
        Validate_sel(no11_03_city_Val,"第11项未选择完全");
        Validate_sel(no11_01_county_Val,"第11项未选择完全");
        Validate_sel(no11_02_county_Val,"第11项未选择完全");
        Validate_sel(no11_03_county_Val,"第11项未选择完全");

        //  pass
        if (que_1Val != undefined && que_2Val != undefined && sexVal != undefined && ageVal != undefined && eduVal != undefined && ideVal != undefined && businessVal != undefined && protectVal != undefined && supportVal != undefined) {
            if (incomeVal!="请选择"&&no10_01_city_Val!="市州"&&no10_02_city_Val!="市州"&&no10_03_city_Val!="市州"&&no11_01_city_Val!="市州"&&no11_02_city_Val!="市州"&&no11_03_city_Val!="市州"&&no10_01_county_Val!="县区"&&no10_02_county_Val!="县区"&&no10_03_county_Val!="县区"&&no11_01_county_Val!="县区"&&no11_02_county_Val!="县区"&&no11_03_county_Val!="县区") {
            	// ajax
                form.submit();
            }
        }
    });

    // validate
    function Validate (val,prompt){
        if (val==undefined) {
            validate.show();
            validateVal.html('').html(prompt);
        }
        else{
            validate.hide();
        }
    }
    function Validate_sel (val,prompt){
        if (val=="市区" || val=="县区" || val=="请选择") {
            validate.show();
            validateVal.html('').html(prompt);
        }
        else{
            validate.hide();
        }
    }
})

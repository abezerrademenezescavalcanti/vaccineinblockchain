var passportNumber, patientName, dateOfBirth, gender, nacionality, documentNumber;

$("#patientlabel").hide();
$("#passportlabel").hide();
$("#dateofbirthlabel").hide();
$("#genderlabel").hide();
$("#naclabel").hide();
$("#documentlabel").hide();
$("#patientinput").focus();

function mudaCampo(event) {
    const source = event.target || event.srcElement;
    if (event.which == 13 || event.keyCode == 13) {
        if (source.id === "patientinput") {
            patientName = $("#patientinput").val();
            $("#patientlabel").html(generateHtmlContent(patientName));
            $("#patientnamelabel").html(generateHtmlContent(patientName));
            $("#patientnamelabel_en").html(generateHtmlContent(patientName));
            $("#patientnamelabel_fr").html(generateHtmlContent(patientName));
            $("#patientinput").hide();
            $("#patientlabel").show();
            $("#passportinput").focus();
        } else if (source.id === "passportinput") {
            passportNumber = $("#passportinput").val();
            $("#passportlabel").html(generateHtmlContent(passportNumber));
            $("#passportinput").hide();
            $("#passportlabel").show();
            $("#dateofbirthinput").focus();
        } else if (source.id === "genderinput") {
            gender = $("#genderinput").val();
            $("#genderlabel").html(generateHtmlContent(gender));
            $("#genderlabel_en").html(generateHtmlContent(gender));
            $("#genderlabel_fr").html(generateHtmlContent(gender));
            $("#genderinput").hide();
            $("#genderlabel").show();
            $("#nacinput").focus();
        } else if (source.id === "dateofbirthinput") {
            dateOfBirth = $("#dateofbirthinput").val();
            $("#dateofbirthlabel").html(generateHtmlContent(dateOfBirth));
            $("#dateofbirthlabel_en").html(generateHtmlContent(dateOfBirth));
            $("#dateofbirthlabel_fr").html(generateHtmlContent(dateOfBirth));
            $("#dateofbirthinput").hide();
            $("#dateofbirthlabel").show();
            $("#genderinput").focus();
        } else if (source.id === "nacinput") {
            nacionality = $("#nacinput").val();
            $("#naclabel").html(generateHtmlContent(nacionality));
            $("#naclabel_en").html(generateHtmlContent(nacionality));
            $("#naclabel_fr").html(generateHtmlContent(nacionality));
            $("#nacinput").hide();
            $("#naclabel").show();
            $("#documentinput").focus();
        } else if (source.id === "documentinput") {
            documentNumber = $("#documentinput").val();
            $("#documentlabel").html(generateHtmlContent(documentNumber));
            $("#documentlabel_en").html(generateHtmlContent(documentNumber));
            $("#documentlabel_fr").html(generateHtmlContent(documentNumber));
            $("#documentinput").hide();
            $("#documentlabel").show();
        }
    }
}

function generateHtmlContent(input) {
    return "<strong>" + input + "</strong>";
}
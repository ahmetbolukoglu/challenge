//is-valid
//is-invalid

$(document).ready(function () {
    formDesign.Init();
});

var formDesign = {
    Init: function () {
        this.Form.Init();
    },
    Form: {
        Init: function () {
            this.InputBlur();
            this.Submit();
        },
        Validate: function ($field) {
            if ($field.attr("type") == "text") {
                if ($field.val().length === 0) {
                    $field.removeClass("is-valid").addClass("is-invalid");
                    // $field.next().removeClass
                    return false;
                } else {
                    $field.removeClass("is-invalid").addClass("is-valid");
                    // $field.next().removeClass
                    return true;
                }
            }
            else if ($field.attr("type") == "checkbox") {
                if ($field[0].checked) {
                    $field.removeClass("is-invalid").addClass("is-valid");
                    // $field.next().removeClass
                    return true;
                } else {
                    $field.removeClass("is-valid").addClass("is-invalid");
                    // $field.next().removeClass
                    return false;
                }
            }
            else {
                return true;
            }
        },
        InputBlur: function () {
            $(document).on("blur", "input", function () {
                formDesign.Form.Validate($(this));
            });
        },
        Submit: function () {
            $(document).on("click", "#btnRegister", function () {                
                if (formDesign.Form.Validate($("#txtFirstName")) && formDesign.Form.Validate($("#txtSurname")) &&
                    formDesign.Form.Validate($("#txtPassword")) && formDesign.Form.Validate($("#txtCountry")) &&
                    formDesign.Form.Validate($("#txtCity")) && formDesign.Form.Validate($("#chkTerms"))) {
                    $("#btnRegister").removeClass().addClass("submit-success");
                } else {
                    $("#btnRegister").removeClass().addClass("submit-error");
                    $(".register-form").addClass("was-validated");
                }

                window.setTimeout(function () {
                    $("#btnRegister").removeClass().addClass("btn btn-primary");
                }, 1000);

                return false;
            });
        },
    }
};
$(document).ready(function () {
    $('.save-edit-icon').click(function (e) {
        e.preventDefault();

        // Get the edited tasks from the input fields
        var editedTasks = {
            Id: $('.task-id').val(), // Get the id of the task from the hidden input field
            Description: $('.input-field').val(),
            Category: $('.select-input').val(),
            DueDate: $('.date').val(),
            PriorityLevel: $('.priority-level').val(), // Make sure this selector matches the actual HTML element
            CompletionStatus: $('.completion-status').is(':checked')
        };

        // Make an AJAX call to the server-side method
        $.ajax({
            url: '/Tasks/Edit',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(editedTasks),
            success: function (response) {
                if (response.success) {
                    location.reload();
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("AJAX call failed: " + textStatus + ', ' + errorThrown);
                console.error("Response text: " + jqXHR.responseText);
            }
        });
    });
});
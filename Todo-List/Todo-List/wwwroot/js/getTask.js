$(document).ready(function () {
    $('.edit-icon').click(function () {
        var taskId = parseInt($(this).data('id')); // Parse the id to an integer

        $.ajax({
            url: '/Tasks/GetTask/' + taskId, // URL of the method that returns task data
            type: 'GET',
            success: function (task) {
                $('.input-field[name="Description"]').val(task.description);
                $('.select-input[name="Category"]').val(task.category);
                $('#dateTimeInput').val(task.dueDate);
                // Repeat for all other input fields
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(textStatus, errorThrown); // Log any errors to the console
            }
        });
    });
});
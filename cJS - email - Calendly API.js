function() {
    // Check if the specific condition is met
    if({{DLV - calendly_event}} === 'event_scheduled') {
        var xhr = new XMLHttpRequest();
        var calendly_url = 'https://api.calendly.com/scheduled_events/' + {{DLV - Calendly - event_uuid}} + '/invitees/' + {{DLV - Calendly - invitee_uuid}};
        var response;
        xhr.open('GET', calendly_url, false); // false for synchronous request
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', 'Bearer <INSERT YOUR API ACCESS TOKEN HERE>'); // e.g.Bearer ejnknfsf984352lnflnvs843...
        
        try {
            xhr.send();
            if (xhr.status === 200) {
                response = JSON.parse(xhr.responseText);
               return response.resource.email; // Modify according to your actual response structure
            } else {
                // Handle HTTP errors
                return 'Error: ' + xhr.status;
            }
        } catch (error) {
            // Handle network errors or other exceptions
            return 'Exception: ' + error.toString();
        }
    } else {
        // If the condition is not met, you might want to return something specific
        return 'Condition not met';
    }
}

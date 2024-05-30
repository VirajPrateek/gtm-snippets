<script>
window.dataLayer = window.dataLayer ||[];
window.addEventListener('message',
  function(e) {
  
    if (e.data.event && e.data.event.indexOf('calendly') === 0) 
    {
      if(e.data.event == 'calendly.event_scheduled' )
      { 
        var originalString = e.data.payload.invitee.uri ; 
        var regex_event = /scheduled_events\/(.*?)\/invitees/;
        
        var event_uuid = originalString.match(regex_event);
        var regex_invitee = /invitees\/(.*)/;
        var invitee_uuid = originalString.match(regex_invitee);
        
          window.dataLayer.push({
          'event' : 'calendly',
          'calendly_event' : e.data.event.split('.')[1] ,
          'event_uuid' : event_uuid[1] ,
          'invitee_uuid'  : invitee_uuid[1]
        });
      
        
      }  
      
      else 
      {
        window.dataLayer.push({
        'event' : 'calendly',
        'calendly_event' : e.data.event.split('.')[1]
        });
      }
    }
  }
);
</script>
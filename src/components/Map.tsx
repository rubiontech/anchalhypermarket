// components/Map.tsx
'use client'
import React, { useEffect } from 'react';

const Map: React.FC = () => {
    useEffect(() => {
        // Function to initialize the map
        const initMap = () => { 
          const businessLocation = { lng:  76.915733, lat:  8.926568 };  
          const map = new google.maps.Map(
            document.getElementById("map") as HTMLElement,
            {
              zoom: 18,
              center: businessLocation,
            }
          );

       
            if (google?.maps?.marker?.AdvancedMarkerElement) {
                new google.maps.marker.AdvancedMarkerElement({
                    position: businessLocation,
                    map: map,
                    title: "Business Location",
                });
            } else {
               
                new google.maps.Marker({
                    position: businessLocation,
                    map: map,
                    title: "Business Location",
                });
            }
        };

        // Ensure initMap is available globally
        (window as any).initMap = initMap;

        // Check if the script is already added
        if (!document.querySelector(`script[src*="maps.googleapis.com/maps/api/js"]`)) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}&callback=initMap`;
            script.async = true;
            script.defer = true;
            script.id = 'google-maps-script';
            document.head.appendChild(script);
        } else {
            initMap();
        }

        // Cleanup script on component unmount
        return () => {
            const script = document.getElementById('google-maps-script');
            if (script) {
                document.head.removeChild(script);
            }
        };
    }, []);

    return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default Map;

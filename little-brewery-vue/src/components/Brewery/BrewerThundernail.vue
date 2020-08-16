<template>
    <div class="">
        <div class = "mt-4 mb-3 p-2 bg-white">
            <div class = "thumbnail " style="width: 100%;">
                <img src = "/brewers/default.jpg" alt = "Brewers Profil Image"  style="width: 100%; " class="">
            </div>
            
            <div class = "caption mt-2">
                <h3>{{ brewer.name }}</h3>
                <p class= "text-muted">Register on  {{ brewer.created_at | dateFormat }}</p>
                <p>City: {{ brewer.city | uppercase}}</p>
            </div>
        </div>


    </div>
</template>

<script>
import moment from 'moment'

export default {
    props: {
        brewer: Object,
    },
    filters: {
        dateFormat: function(value) {
            return moment(String(value)).format('DD/MM/YYYY');
        },

        uppercase: function(value) {
            return value.toUpperCase() || "";
        }
    }
}
</script>
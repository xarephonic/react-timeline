import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAvfilGHsgTYNT-rCQ-dUeFtgWHkHddJao",
    authDomain: "react-timeline-860fd.firebaseapp.com",
    databaseURL: "https://react-timeline-860fd.firebaseio.com",
    storageBucket: "",
  };
  var firebaseApp =firebase.initializeApp(config);
  export default firebaseApp;


  /*
  			<script src="https://www.gstatic.com/firebasejs/4.8.2/firebase.js"></script>
			<script>
				var config = {
					apiKey: "AIzaSyAvfilGHsgTYNT-rCQ-dUeFtgWHkHddJao",
					authDomain: "react-timeline-860fd.firebaseapp.com",
					 databaseURL: "https://react-timeline-860fd.firebaseio.com",
					projectId: "react-timeline-860fd",
					storageBucket: "",
					messagingSenderId: "509830395425"
				};
				firebase.initializeApp(config);
			</script>
  */
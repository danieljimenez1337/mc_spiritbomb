MinecraftAPI.getServerStatus('mc.spiritbomb.moe', {
    port: 25565
  }, function (err, status) {
    var online = document.getElementById("online");
    if (err) {
        online.innerHTML = "error";
        online.style.color = "red";
    }
    if (status.online){
        online.innerHTML = status.players.now + " online";
    }
    else{
        online.innerHTML = "offline";
        online.style.color = "red";
    }
    console.log(status);
});
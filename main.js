function process(event) {
  var files = event.target.files
  var reader = new FileReader()
  reader.onload = function() {
    var contents = this.result
      console.log(contents);
      let x = contents;
      var code = x;
            var i = 0;
            document.addEventListener("keydown", function (){
                terminal.innerText += code.slice(i, i+8);
                i += 8;
                if (i > code.length) {i=0;}
            });
            setInterval(function (){
                var term = document.getElementById("terminal");
                term.scrollTop = term.scrollHeight;
            }, 100);
}

  reader.readAsText(files[0])
}

var input = document.querySelector('.file')
input.addEventListener('change', process, false)

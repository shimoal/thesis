var DockerSandbox = function(timeout_value, vm_name, code) {
	this.timeout_value = timeout_value;
	this.vm_name = vm_name;
	this.compiler_name = "nodejs";
	this.code = code;
}

DockerSandbox.prototype.run = function() {
	
};
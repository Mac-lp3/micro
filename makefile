# TODO prod flag
# TODO tests

doc_build_ureg:
	npm install --prefix userRegistrationSvc
	docker build -t micro/usr-reg -f userRegistrationSvc/Dockerfile userRegistrationSvc
# TODO prod flag

doc_build_ureg:
	npm install --prefix userRegistrationSvc
	docker build -t micro/usr-reg -f userRegistrationSvc/Dockerfile userRegistrationSvc

test_ureg:
	npm --prefix userRegistrationSvc run test
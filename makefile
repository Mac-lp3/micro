# TODO prod flag

doc_build_usr_reg_svc:
	npm install --prefix userRegistrationSvc
	docker build -t micro/usr-reg-svc -f userRegistrationSvc/Dockerfile userRegistrationSvc

doc_build_usr_prof_svc:
	# TODO

doc_build_events_svc:
	npm install --prefix eventsSvc
	docker build -t micro/events-svc -f eventsSvc/Dockerfile eventsSvc

test_ureg:
	npm --prefix userRegistrationSvc run test

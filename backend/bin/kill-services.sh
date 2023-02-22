echo "Kill nodemon"
for pid in `ps aux| grep nodemon|awk '{print $2}'`
	do kill $pid
done

echo "Kill bore dropbear"
for pid in `ps aux |grep /opt/bin/bore|awk '{print $2}'`
	do kill $pid
done

echo "Kill dropbear"
for pid in `ps aux |grep dropbear|awk '{print $2}'`
	do kill $pid
done

echo "Kill vsftpd"
for pid in `ps aux |grep vsftpd|awk '{print $2}'`
	do kill $pid
done

echo "Kill localtonet"
for pid in `ps aux| grep localtonet|awk '{print $2}'`
	do kill $pid
done

echo "Kill gotty"
for pid in `ps aux| grep gotty|grep 8089|awk '{print $2}'`
	do kill $pid
done
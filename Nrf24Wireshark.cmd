@echo OFF
echo Enter COM port number the sniffer is connected to
mode | findstr COM
set /p comport=Enter Comport:
rem -a in the following command line has to match the network ID of the MYsensor library -- 
 
start "newtool" "C:\Program Files\Wireshark\Nrf24Sniff.exe" -P%comport% -a0x2a330f7100 -r2 

"C:\Program Files\Wireshark\wireshark" -k -i \\.\pipe\wireshark


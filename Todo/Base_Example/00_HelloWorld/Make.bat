@echo off
::   /------- Find Cwc (if not set in your Environement variables) ---------/
set cwc=cwc
FOR /L %%G IN (1,1,5) DO (if not exist cwc.exe ( cd.. ))
cd %~dp0

%cwc% Make.cwMake

::  Equivalent (If cwc is set in Environement variables):
::  cwc Make.cwMake

pause

python3 cm_3_counterr.py basecodex >cm_3_counterr.basecodex.log
python3 cm_3_counterr.py basefixed >cm_3_counterr.basefixed.log
python3 cm_3_counterr.py basecomment >cm_3_counterr.basecomment.log
python3 cm_3_counterr.py basevar >cm_3_counterr.basevar.log
python3 cm_3_counterr.py group2 >cm_3_counterr.group2.log
python3 cm_3_counterr.py group2fixed >cm_3_counterr.group2fixed.log

cat cm_3_counterr.basecodex.log | grep "\[ERR" >cm_3_counterr.basecodex.ERROR.log
cat cm_3_counterr.basefixed.log | grep "\[ERR" >cm_3_counterr.basefixed.ERROR.log
cat cm_3_counterr.basecomment.log | grep "\[ERR" >cm_3_counterr.basecomment.ERROR.log
cat cm_3_counterr.basevar.log | grep "\[ERR" >cm_3_counterr.basevar.ERROR.log
cat cm_3_counterr.group2.log | grep "\[ERR" >cm_3_counterr.group2.ERROR.log
cat cm_3_counterr.group2fixed.log | grep "\[ERR" >cm_3_counterr.group2fixed.ERROR.log



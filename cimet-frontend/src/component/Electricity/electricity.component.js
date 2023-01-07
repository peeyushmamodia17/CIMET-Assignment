import { useEffect } from 'react';
import { Grid, Typography, Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import React, {useState} from 'react'
import electricityScreenStyle from "./electricity.style";
import parse from "html-react-parser";

const ElectricityTemplate = ({ planList }) => {
    const [open, setOpen] = useState(false);
    const [allPlan, setAllPlan] = useState([]);
    const classes = electricityScreenStyle();
    const handleLinkOpen = (link) => {
        window.open(link)
    }

    useEffect(() => {
        let obj = {};
        planList.map((plan) => {
            if (obj[plan.billing_options]) {
                if (obj[plan.billing_options].expected_annually_bill_amount > plan.expected_annually_bill_amount) {
                    obj[plan.billing_options] = plan
                }
            } else {
                obj[plan.billing_options] = plan
            }
        })
        setAllPlan(obj);
    }, [planList])
    
    return (
        <Grid container className={classes.headContainer}>
            <Grid item xs={12} className={classes.container}>
                <Grid container>
                    <Grid xs={1}>
                        <Grid><Typography className={classes.headText}>Electricity {planList.length ? planList.length : 0}</Typography></Grid>
                    </Grid>
                    <Grid container xs={11} className={classes.mainHeadContainer}>
                        <Grid item>
                            <Typography>2000, NSW</Typography>
                        </Grid>
                        <Grid item>
                            <Button className={classes.filterButton}>Filter</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12}>
                    <Typography className={classes.mainText}>Initial recommendations are based on avaerage medium usage as determined by relevant energy refulation, please view the information hover next to the estimated cost box for more information. For a more accurate comparison relevant to your circumstances, please use the bill details tab on the results page to enter your most recent energy bill details</Typography>
                </Grid>
            </Grid>
            {Object.values(allPlan)?.map((plan) => {
                return (
                    <>
                    <Grid item xs={12} className={classes.mainContainer}>
                        <Grid container xs={12} spacing={2}>
                            <Grid item xs={4} className={`${classes.firstDiv} ${classes.linkColor}`}>
                                <Grid item xs={12}>
                                    <img src={plan.provider_image} alt="img" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography onClick={() => setOpen(true)}>View Details</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography onClick={() => handleLinkOpen(plan?.plan_document)}>Baisc Plan Information Document</Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={4} className={classes.firstDiv}>
                                <Grid item xs={12} className={classes.midDiv}>
                                    <Typography>{plan?.dmo_percentage?.Ausgrid} the current refernece price</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>{parse(plan?.plan_features)}</Typography>
                                </Grid>
                                <Grid item xs={12} className={classes.traiffDiv}>
                                    <Typography>Standard feed in tariff: {plan?.expected_annually_discounted_bill_amount_deferit}</Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid item xs={12} className={classes.lastContainer}>
                                    <Grid xs={12} className={classes.costText}>
                                        <Typography>Estimated Cost</Typography>
                                    </Grid>
                                    <Grid xs={12} className={classes.costContainer}>
                                        <Grid className={classes.costContainer1}>
                                            <p>{plan?.expected_annually_bill_amount}</p>
                                            <p>/yr</p>
                                        </Grid>
                                        <Grid className={classes.costContainer2}>
                                            <p>{plan?.expected_monthly_bill_amount}</p>
                                            <p>/mo</p>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Typography>{plan?.billing_options}</Typography>
                                        <Typography>{plan?.expected_annually_bill_amount}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.container2}>
                            <Typography>{parse(plan?.dmo_content?.Ausgrid)}</Typography>
                        </Grid>
                        <Grid container xs={12} className={classes.container3}>
                            <Grid item xs={8}>
                                <Typography>{parse(plan?.cooling_off_period)}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Button className={classes.buttonContainer}>Connect Online Today</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Dialog onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}>
                <DialogTitle>View Details</DialogTitle>
                <DialogContent>
                    <Typography>{parse(plan?.provider?.eic)}</Typography>
                </DialogContent>
            </Dialog>
                    </>
                )
            })}
        </Grid>
    )
}

export default ElectricityTemplate;
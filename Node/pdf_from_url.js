const express = require("express");
const puppeteer = require("puppeteer");
const router = express.Router()

router.get("/", async (req, res) => {
const url = req.query.target;
    const browser = await puppeteer.launch({
        headless: true
    });

const webPage = await browser.newPage();
    await webPage.goto(url, {
        waitUntil: "networkidle2"
    });

const pdf = await webPage.pdf({
    printBackground: true,
    format: "Letter",
    margin: {
            top: "20px",
            bottom: "40px",
            left: "20px",
            right: "20px"
            }
    });

await browser.close();
    res.contentType("application/pdf");
        res.send(pdf);
    })

module.exports = router

// Works Great
// https://thenextweb.com/syndication/2021/01/10/how-to-turn-web-pages-into-pdfs-with-puppeteer-and-nodejs/amp/

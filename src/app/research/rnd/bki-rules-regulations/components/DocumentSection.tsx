"use client";
import {useCallback, useState} from "react";
import {BookOpen, FileText, FolderOpen} from "lucide-react";
import Link from "next/link";
import Accordion from "@/components/Accordion";

type DocItem = { id: string; label: string; href?: string };
type SubGroup = { id: string; title: string; docs: DocItem[] };
type Section = { id: string; title: string; groups: SubGroup[] };

export const DATA: Section[] = [
    {
        "id": "part-0",
        "title": "Part 0. General",
        "groups": [
            {
                "id": "guidance-for-class-notations",
                "title": "Guidance for Class Notations",
                "docs": [
                    {
                        "id": "guidance-for-class-notations-pt-0-vol-b-2025",
                        "label": "Guidance for Class Notations ( Pt. 0, Vol.B ) Jan 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa0pMWW5KQldHaHdkMEpXV2pncmRXUTVha3BxU2xFOVBTSXNJblpoYkhWbElqb2liMGx0ZEhKNGFHdGFjSFpxZEZNM1RraENPV3cxWmxwVmIweGhlQ3QyZDNoQlZsVjFUMHBSZWtSbGRqZ3JOa3hPY1cxdVVXSjFaRXBYV1hSTFNWWk1aa1ZxZEVveVIzRmlibGhEWm1acmNUTjBLMkl3U1U1NWJHTjBVazFWVUhaWFpqTklhR1UwTXpNNWNqUkpTM2xhY21ab1FXOW9PVlpJZFVRM1NYY3JaRmh4YVdKTGQyWjVRVVo0TlZad2VHSk5WR05aTWtJdlVsWXhaV1ZLYVdoUmJ6RjVUV1ozZUZKVU4xbzJhWFJVYmxONFdIbGFlbXhoY2xsWU9VcGxNbWtySWl3aWJXRmpJam9pWVdRMVptUmhNbVUyWlRnNVlUWmpaREEyTW1Vd01qRTVPV1kxTUdRMll6WXpOVGRsT1dZNFpEZ3hPV1U1WkRNeVpUSTBaR1JtTTJVMVlqUTBaalJtWVNJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            }
        ]
    },
    {
        "id": "part-1",
        "title": "Part 1. Seagoing Ship",
        "groups": [
            {
                "id": "amendment-guidance-for-code-and-convention-interpretation",
                "title": "Amendment Guidance for Code and Convention Interpretation",
                "docs": [
                    {
                        "id": "amendment-guidance-for-code-and-convention-interpretation-pt-1-vol-y-2022",
                        "label": "Amendment Guidance for Code and Convention Interpretation ( Pt. 1, Vol.Y ), 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJak4xZW1SSVJHNTVUQzgyZHpoNmFHTnFRVGh0YlhjOVBTSXNJblpoYkhWbElqb2lORWMzUVRsRVRFRnJSekl5U1RNd1RHUnhWV2RvY2s1dGRWcGhia0UzVVhWa2FHMHdXakZXWnpReFNVSlRUR05GYTB0eFQwVmlZVGt2VlhkM1ptTXliU0lzSW0xaFl5STZJamM0T1RaaFltRXlZamhsTlRZNU5qVTRaRFJqWm1JMFpETTVOV1kxTm1RME1USTVaakZpWVdZMk9ETXdaVFkzWTJZMFlURmpaRFV6TXpCbFpHRm1aVElpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    },
                    {
                        "id": "amendment-guidance-for-code-and-convention-interpretation-pt-1-vol-y-2024-apr",
                        "label": "Amendment Guidance for Code and Convention Interpretation ( Pt. 1, Vol.Y ), Apr 2024",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbWhwZGt0MFVFdG9RazkxT0VJMFV6TlpURlJsWVZFOVBTSXNJblpoYkhWbElqb2lhbkppWmtSeFNUZ3dSMEpLY0hCbFJGTmpRMk4yTjJFd1EycElSVGhrUzJWMGVYRlVWSEJzT1VwNGQwRldVa0ZWZW5GQlNrNUNVa2xRVkZONE5tTkhXQ0lzSW0xaFl5STZJamxpTnprd1ptUTJNREJpTUdWbU1UbGxZVE15WlRSbU5qbG1NR1F3TXpVMU9UWTJaRFUzTmpobVpEZ3hOekU1TkRJNU1qY3hOekZrTTJaak5tSTJNVGtpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    },
                    {
                        "id": "amendment-guidance-for-code-and-convention-interpretation-pt-1-vol-y-2023-mar",
                        "label": "Amendment Guidance for Code and Convention Interpretation ( Pt. 1, Vol.Y ), Mar 2023",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa2gzVDFKNmREWkZNMGxvYVRsUVMwaHpaM2MzU1ZFOVBTSXNJblpoYkhWbElqb2lLMWd4TUhwRU1XRmFabVJrZFZkTll6VjVaelJTV1VSclRDOTNZMkZYZG5kU1JVbFhPWHBWUzNsVUwxSm1ZMjFCUTJSSldqRkhOMDV6T0RWWk5GaFFUaUlzSW0xaFl5STZJamMyTXpSall6QTBOR1U0T0RRNU16VTNOVEpoT1daalkyVmlNR1l3TWprMU1EbG1aV1kzWkdNd1pqSmxZVEptWldJeVpUazBaakUxWVRrMllXWmxaVGNpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    },
                    {
                        "id": "amendment-guidance-for-code-and-convention-interpretation-pt-1-vol-y-2025-may",
                        "label": "Amendment Guidance for Code and Convention Interpretation ( Pt. 1, Vol.Y ), May 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJamxZWWxKd0szUlBWbVZRY0RNM2JuaDFWMG8xU0ZFOVBTSXNJblpoYkhWbElqb2lNSHA2VkRNMVdrZEVlVkY0V25GV1ZWTkJOVnAxTlZkMWRqRnZTVU5EV0RBd2NUWXZkMU5wVjNkdE5ESlZlVTFVTDB4UmFYbzNTMDk2YTBwTVFURnlRaUlzSW0xaFl5STZJakUzTWpJMk5HRTFOMk0zWmpabU1tWmtOVFk1T1RWbU16SXdOekprWVdSaVl6STJZekEwWlRZd05tSXlOVE5qWVRjMk9HSXhZekZsTWpZNFpqYzFaV0lpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    },
                    {
                        "id": "amendment-guidance-for-code-and-convention-interpretation-pt-1-vol-y-2023-nov",
                        "label": "Amendment Guidance for Code and Convention Interpretation ( Pt. 1, Vol.Y ), Nov 2023",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJblYzUmxab2QxQmpkSHB1ZDA0MVYyRjNaMDlKVVdjOVBTSXNJblpoYkhWbElqb2lkMjFOVjIxamRHMVJUVk13YjJwVWFVRlJUalJGV0dOSVpHWXZTelJ4UW0xM1F6RTNaV2w1VWpkSVUwbzJLM1Y2YzJSMU5XOVNkWEkxVW1wUFdXdFFVaUlzSW0xaFl5STZJak13T0dRM05UZzVZelJsWTJFM016UXpOVFF4TXpRNE5EbGtNV1U0T1RFNU9XUXdPRFU0Wm1ObU16QmpNalV5TmpWbVpXWTNOVGxpT1RJMU1EUTJNMllpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    },
                    {
                        "id": "amendment-guidance-for-code-and-convention-interpretation-pt-1-vol-y-2022-oct",
                        "label": "Amendment Guidance for Code and Convention Interpretation ( Pt. 1, Vol.Y ), Oct 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJaXQ0Wldvd1ZtOUliWFZUVFhaRU1HRkNjMUZLWkZFOVBTSXNJblpoYkhWbElqb2labXB6VUM5bUwyVjJVaklyU1dnd2RVeGtTbkZUWjBwamJWUmtlRlZuU2twVE5raHRNa0pwV0VSV05ESXJTSFJuVEdnemRsbGxXVmg2YjI1V04wVnpTaUlzSW0xaFl5STZJalk1TldOa1pqTXlNR1UyTjJNMVlqQXlNVEU1TmpZeFltTXpOVFkzTkRZME9XWXhPRFprTURVMVpEa3dNV0UwTlRrMVlqWmxaV1V4TnpSaE1HVmhZamNpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    },
                    {
                        "id": "amendment-guidance-for-code-and-convention-interpretation-pt-1-vol-y-2024-oct",
                        "label": "Amendment Guidance for Code and Convention Interpretation ( Pt. 1, Vol.Y ), Oct 2024",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa2d3UmtkSE9UaGpjVXhXWjFaTVRqZEZSVWxPYjNjOVBTSXNJblpoYkhWbElqb2lZbmd4ZWt4bGRtaDJiMDl6T1Vwc1EwMVpUbFZLTVdVeVFVMXNkbUV6Y205TVpHRllVVTVzVm5kVU5sZGpTWEIxYzNwYVVYZHJlRk5PTkM5UWVXNWxjU0lzSW0xaFl5STZJamd6TTJReE56QTNNalZrWW1OaVltRXlOelV3WXpNMFpUWmhOemxsWW1NMk5qY3hOemt5WW1NM1lUUXdNREpqWmpVNE1URmtabUl5WlRaak1UVXlPREFpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "amendment-guidance-for-the-approval-and-type-approval-of-materials-and-equipment-for-marine-use",
                "title": "Amendment Guidance for The Approval and Type Approval of Materials and Equipment for Marine Use",
                "docs": [
                    {
                        "id": "amendment-guidance-for-the-approval-and-type-approval-of-materials-and-equipment-for-marine-use-pt-1-vol-w-2022",
                        "label": "Amendment Guidance for The Approval and Type Approval of Materials and Equipment for Marine Use ( Pt. 1, Vol.W ), 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJakJuWW5wRlFtOW1iMk5QYkUxeFNUWllURkJNYW5jOVBTSXNJblpoYkhWbElqb2lkV28wYldseFltZDBaRFEyWWtOU2NHaFJXVWhhWnpGblFqQTBOM2wxYTBOemVXVjNOVVJMWm5GdFExSlBVVkZ5TnpWRGVqWTFTVmh3ZVhGU2IxUk9LeUlzSW0xaFl5STZJbVExWm1ZellqazRORFJsWTJKbFptRm1NRFEyT0RRNVpUa3pNelkyTlRRME9UQXdOalV6T1dJMU1ETXhZekUyWkdFNU16RmtOVGcyWVdWbE9ESTROaklpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    },
                    {
                        "id": "amendment-guidance-for-the-approval-and-type-approval-of-materials-and-equipment-for-marine-use-pt-1-vol-w-2022-jan",
                        "label": "Amendment Guidance for The Approval and Type Approval of Materials and Equipment for Marine Use ( Pt. 1, Vol.W ), Jan 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbVo2VTJoQ1JrbzFlbUZ3VTBsTlZuazBVelF3VDBFOVBTSXNJblpoYkhWbElqb2lSSFIxVldVeE1ERXllRTVtY0dweVpsZENia294YWk5UWVEaG5LMWN5VHpoTWJYZGxTamR6U1dKclpFWlVkSEkyYlZFeE56UmlTaTh4TjFoM1QyNU5kU0lzSW0xaFl5STZJakUzWWpKaE5EUXdaakpqTmpVd01tUXhOek5pWXpVd1l6bG1NemcxWTJFMU1EbGhNMlEyTW1RMU9UVTRZVEkyT0RBMU5tWTBOREV3T0RJNE56UmxOVGdpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    },
                    {
                        "id": "amendment-guidance-for-the-approval-and-type-approval-of-materials-and-equipment-for-marine-use-pt-1-vol-w-2024-jan",
                        "label": "Amendment Guidance for The Approval and Type Approval of Materials and Equipment for Marine Use ( Pt. 1, Vol.W ), Jan 2024",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbVJyVDIxNGRtY3dNVVI2WlZSaVprcFRaRzhyTDNjOVBTSXNJblpoYkhWbElqb2lOMWhITVVsNFdVazNRMll6VGxKeU1taExSazl4WjA1eGFYTkxUMGMzYTFGclQzVnFRVUZKV0RoMWVqaE5hbHBUVkRCVGFUYzRiRnBGVFVSeldsbHdaQ0lzSW0xaFl5STZJakl6TmpVd01qUmxZakZtT0RjMFltUXpaVFl6TldVNVpqSmpPRGswTUdFeE5tSmtNR0U1TlRrNFpUa3dZbVF4Wm1Fek5ESXhNMkV6TURjMlpERXhNRGNpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    },
                    {
                        "id": "amendment-guidance-for-the-approval-and-type-approval-of-materials-and-equipment-for-marine-use-pt-1-vol-w-2025-jan",
                        "label": "Amendment Guidance for The Approval and Type Approval of Materials and Equipment for Marine Use ( Pt. 1, Vol.W ), Jan 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbFJSZUZodlZuQlhjREYyZWpCWE1IcHZTbG8xVjBFOVBTSXNJblpoYkhWbElqb2lhbmQwT0doaFlVMXFkRXRVYUVSRVUwaElWREZwTWxKMU1YaDNaSHBQU3poMmVuWmFkblV5Um0xRVZpOTVZblpaY25samRTOXRSRmhVSzFGbmFFNXZOU0lzSW0xaFl5STZJamd5WVRNMFlqbGpNamt6WkRCa1l6UmxNakJrT1RVeFpXTTFOV1JtWVRFME1UTTBZMk00TldZek5XWm1OalppTWpVeE9UWTFObUkzWVdVME5HVTNaV1VpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    },
                    {
                        "id": "amendment-guidance-for-the-approval-and-type-approval-of-materials-and-equipment-for-marine-use-pt-1-vol-w-2023-jul",
                        "label": "Amendment Guidance for The Approval and Type Approval of Materials and Equipment for Marine Use ( Pt. 1, Vol.W ), Jul 2023",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJamRMTjFGb0wxRjRSelJFTVRSamEwUTJabUZGZW1jOVBTSXNJblpoYkhWbElqb2lheXRuUnpsV2VqaFhNa1JxYUV4dFVGazViWFJSWlU5c1RtdFllRnBhVUVsdlpEbDJkRTA1U1ZCNVJIQnRkMWRTSzJWeGNUaEtiRzV0TldsNFRrUmxieUlzSW0xaFl5STZJbVEwTTJObU56Wm1NV1UwWTJaa1pHSmxPREkwT1RRMk16RmxPR1V4TkRGa1lUZzNNbVkxT0RaalpHUTVNMkppWWpVMk1EZ3habUkyTlRjMk1EQXpabVFpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    },
                    {
                        "id": "amendment-guidance-for-the-approval-and-type-approval-of-materials-and-equipment-for-marine-use-pt-1-vol-w-2023-jul",
                        "label": "Amendment Guidance for The Approval and Type Approval of Materials and Equipment for Marine Use ( Pt. 1, Vol.W ), Jul 2023",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbFY2Um1NNGNGSklRMW93Ym1sQlVESnVRMk01T0djOVBTSXNJblpoYkhWbElqb2ljM2hWVDBoSk5tWkRhRFJZTUZKSFVHZ3dUbVpKUlZoRGVISjJRakJyTlhGb1EzVmhiVkZLV1U5UFYzRnNaVkptT0RodWJrMUpSalJWSzFnNE1scGtVeUlzSW0xaFl5STZJbUl3TW1abE5qazROMlprTkROa01URTBNakptT1dOaU5XUmtabU5qTURBMVpURm1OVEE0TVRkaE5UTTBOMlUzTVRJMU1tSTJOV0UyTldNNU1UazBOVGNpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    },
                    {
                        "id": "amendment-guidance-for-the-approval-and-type-approval-of-materials-and-equipment-for-marine-use-pt-1-vol-w-2024-jul",
                        "label": "Amendment Guidance for The Approval and Type Approval of Materials and Equipment for Marine Use ( Pt. 1, Vol.W ), Jul 2024",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJazVrV2pBeVNrMUVVRlpTZUc1MVdFNVJORGhSVUVFOVBTSXNJblpoYkhWbElqb2ljeXRaTVRkdWFYVkdRV1pTWm00eVRHNVlZMXBTYVRWNllrNVBXREIzVUVad1lUZ3lTREkyUzNKQmMyeEZMekY0Y1M5a09YbGtZalV6V2tGMk1IQklkaUlzSW0xaFl5STZJbVZqTXpRNE5EbG1PV1EwWkRneU16bGtNekExWkdRM05UWTVNR0kyWm1NME16bGlabVF5TVdZME5HTTJOR0ZqWTJFMFlUZzRNamc0WVRSalpEZ3hNRFFpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "amendment-guidelines-for-the-use-of-gas-or-other-low-flashpoint-fuels-for-ships",
                "title": "Amendment Guidelines for the Use of Gas or other Low-Flashpoint Fuels for Ships",
                "docs": [
                    {
                        "id": "amendment-guidelines-for-the-use-of-gas-or-other-low-flashpoint-fuels-for-ships-pt-1-vol-1-2025-apr",
                        "label": "Amendment Guidelines for the Use of Gas or other Low-Flashpoint Fuels for Ships ( Pt. 1, Vol.1 ), Apr 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbWxaWlRrNVppc3dibk5qTDJ4VU1GQTNNM3AyU0djOVBTSXNJblpoYkhWbElqb2lkM3BvZVU5QkwyNW9aV2R0Um5VME5qTmpXRGhGZW5nNFpWUTVaVGRUY1VKRmNrdDNTMk5rVEVSVU5VbFZOM2wwYTBsUVEyNHZUV2wxWW1sMU1IbE5lU0lzSW0xaFl5STZJalZqWlRFd01EazNNMkU0WlRNd04yRTVORGd4TkRreU5HWmtOMkUyTkRKaVl6Y3haRGc0WVRobFlqYzFaVEkxTkRFd1ptSmhZemc1WXprNU5ESmhPV1VpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "amendment-rules-for-ships-carrying-liquefied-gases-in-bulk",
                "title": "Amendment Rules for Ships Carrying Liquefied Gases in Bulk",
                "docs": [
                    {
                        "id": "amendment-rules-for-ships-carrying-liquefied-gases-in-bulk-pt-1-vol-ix-2023-jan",
                        "label": "Amendment Rules for Ships Carrying Liquefied Gases in Bulk ( Pt. 1, Vol.IX ), Jan 2023",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJazVZWkVkaGEwcGpTRlIxVTJkd1prTnVibVJHYkZFOVBTSXNJblpoYkhWbElqb2liMFpDWkVGaE5qVktjazU0UW5sSVV6SkhZVzlJZVRObloyMXNlVmxzUzNCaFNYTTVRbW9yTTFZeFpXTlFlblJETVM4MmFGRm1VbGRNT0hFd2RYVlNjQ0lzSW0xaFl5STZJakppTlRCaE56VTJZelZrTlRneU9XSXlOREF5T1RkaU9ESmxNbUZpWVdKaU4yVTJNVEF4WVdabFpqZ3dOakJoTVRBeVpqbGpORGRpWXpVMllXWmtPRGtpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    },
                    {
                        "id": "amendment-rules-for-ships-carrying-liquefied-gases-in-bulk-pt-1-vol-ix-2024-jul",
                        "label": "Amendment Rules for Ships Carrying Liquefied Gases in Bulk ( Pt. 1, Vol.IX ), Jul 2024",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbXBUTDNkM1Uya3hhMFZwYkVSSk5HSmhWa3hqUjNjOVBTSXNJblpoYkhWbElqb2lkVWMwZUdkWFRuVnJSV1J4V0dkclUwZHBZV0l2TW04MFpXUmFWa3gwTWxKWWVISk5kM0JtU0dKdlozZ3lSV2xaVm5Rd2NrOWxOMDV2TjJ3MVFtcFVUQ0lzSW0xaFl5STZJbUU0T1dFeE5HUmxaVGcwTlRkbE56aGtaVGMxTnpZMVltTXhNakJrT0RjNE1qVXdabUl6T0RnMVpEWTNPVGRsWm1Zd1pqQTJaVGxoT1RGaE1UQm1PVFFpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "common-structural-rules-for-bulk-carrier-and-oil-tanker",
                "title": "Common Structural Rules for Bulk Carrier and Oil Tanker",
                "docs": [
                    {
                        "id": "common-structural-rules-for-bulk-carrier-and-oil-tanker-pt-1-vol-xvii-2024",
                        "label": "Common Structural Rules for Bulk Carrier and Oil Tanker ( Pt. 1, Vol.XVII ) Jul 2024",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbU53T1dacmVqVlRNSFUxUzAwNE1FcEJkbEZDUlVFOVBTSXNJblpoYkhWbElqb2lTMjF5ZG1OR1ZuUXdMMVJNV0hKSlN6UTFlQ3Q0UXpsQk1IQjNMMFkyVFU1Vk5FMVBVRTFwYml0emFsUjRSMlU1Vm1wcWNWbFhSREJ6VmpsWFUyWlBZMFp6VUhoWGMxWndjMms0T1ROR1NIRkxSM1JTZWsxRVZrbDZPVVl3ZG01NFprZHRTMGRMTmtremRtSk5aVkFyTUhreUwzWnFZM2RoWTBOTVV6UnVjMFIyZEVoV1VXa3JWVnBHZDFoalFUa3JPV2hxTmxkSlpHb3dXV2R2Um5aNkx6WlVVbE5EWm1kdWVXVkhTVTV2Y0hSTVEyOVdWR3BCZVhkTFJISnVWVWgyYzJsbE5qWm9ZM1V2UzBrMlZFcG9WV1JMTDFoc1FqVjNlbXRpZUZabFNURnJkREZoV2xoMVRUSjFRVUpqTVdWM1VpdE9WelpHWWxJdk1ISktRalJNU0hSUFJqTndWU3RaYjBaMWEySXJORTFZY25KeE4yYzlQU0lzSW0xaFl5STZJbVZsWldZMFpEbGlaalE1Wm1VME5XSTRabUZsWldFMk1tUmxNVEJrTXpZMFpEQXpaams0TmpVMFpqa3lNakl3WVRsbE1HWmxNalkyTVdRd05UTTJNekFpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "corigenda-common-structural-rules-for-bulk-carrier-and-oil-tanker",
                "title": "Corigenda Common Structural Rules for Bulk Carrier and Oil Tanker",
                "docs": [
                    {
                        "id": "corigenda-common-structural-rules-for-bulk-carrier-and-oil-tanker-pt-1-vol-xvii-2025-aug",
                        "label": "Corigenda Common Structural Rules for Bulk Carrier and Oil Tanker ( Pt. 1, Vol.XVII ), Aug 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbE5KZFhOeVQxWm9VbGx5YjBwd1ZEWmphbGh0UmxFOVBTSXNJblpoYkhWbElqb2lkRFZ3VGxFNWJYQnpZVUpJY1hCeVNHMDBOVUVyVGtsS2JsYzBjalExV2toR1dtNVlOWFJKWmxWRmMzRkJNSEJUT1hoS1VXdGpaMEZ2TVd3cldqSm5kaUlzSW0xaFl5STZJamxsTXpNM01HSmxNbVppWTJSbVpURTNNVEpoWldNMk1tVm1NVGxsTURrMlpEazBOVE0xT1RObU56UTFZbVF6TXpRMk5tRmlaVEF5TmpBNE0ySXhaVE1pTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "corigenda-rules-for-materials",
                "title": "Corigenda Rules for Materials",
                "docs": [
                    {
                        "id": "corigenda-rules-for-materials-pt-1-vol-v-2025-mar",
                        "label": "Corigenda Rules for Materials ( Pt. 1, Vol.V ), Mar 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbkZtTkhKd1JXbG9kbmxsTDJ0TVNVOTZURFpEYzFFOVBTSXNJblpoYkhWbElqb2lZekZUU0dSdWJHdEdObUZtSzNSbFRreE5RakYzVURsdVlXWkxZMFJxYURGamFpdGlUbE5aZVdKTWNYVk9abEFyTkdWUk5WZEdSR2xpU0dOWFJsVndTaUlzSW0xaFl5STZJamcyTXpSaU5Ea3paREZsTnpFeFpEQTJNRFF4T1RWbVpHSm1aVEUzWXpnMk9EbGtPV00xTlRjd05UYzFZbVpqWmpjNU9HVmlNVFUwT0RZd056ZzRObUVpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "corigenda-rules-for-ships-carrying-liquefied-gases-in-bulk",
                "title": "Corigenda Rules for Ships Carrying Liquefied Gases in Bulk",
                "docs": [
                    {
                        "id": "corigenda-rules-for-ships-carrying-liquefied-gases-in-bulk-pt-1-vol-ix-2022",
                        "label": "Corigenda Rules for Ships Carrying Liquefied Gases in Bulk ( Pt. 1, Vol.IX ), 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbXhWZFdaSk1EY3pUWGwwTm1rNFRWZG9ieTl6V1djOVBTSXNJblpoYkhWbElqb2lUREJvWjJzcmFFVXJUSFpFTTNGS2JYQndNR2xGV25WdUwzVnNjSFp4VG00NWFVZEJiVzVySzJkVFdYVlFZVVJpUmxCMVVFbG5XRWh0YVRWQmVUQnBWeUlzSW0xaFl5STZJbVUwWVRVNE56RmxPV1l4TURBM016UXpZekF4TUdRM01XTTFOV001T1dRMU56VmxZVGczWTJFMk5qYzRNbVZqTkdRMllUTTJOVGRqWWpZell6bGhNaklpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-calculation-of-diesel-engine-crankshaft",
                "title": "Guidance for Calculation of Diesel Engine Crankshaft",
                "docs": [
                    {
                        "id": "guidance-for-calculation-of-diesel-engine-crankshaft-pt-1-vol-p-2018",
                        "label": "Guidance for Calculation of Diesel Engine Crankshaft ( Pt. 1, Vol.P ) Jul 2018",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJak01UVU1emJYaEdUVTU2VDAxTWFpOXhNMmxKYkZFOVBTSXNJblpoYkhWbElqb2lXbmh6SzBSbGNsSm5SV1pDY0dSVk1rdHJhM1ZuYmpRME1rSTNlSE50YkdwUk1ETjVjekJPT0M5TVRuSkpMM1JtVEdGTGQxaGtSMVpzYlRkTmQyUjVSbWt3TTFCcmJtZE5la1ZzWlhwSmFqTjBOblp2V2pSTVZVMVVPREZTZVV0V1MzaDZPRGxxZWs5UWVqa3hTbkJYYjFwdUsyMW1LMlF6YWs5WVlXTmpiMDFMWVZVelRWRTRXblJ4UzFwclRta3hkeko0TmtkTGRYSTVPRmRRZGt3MFFpOWpSRlo2WmtGQmFtRTRXV1ZFWjB0aVlUSTNSM2w1T1RRcmVtMVVOVU0yYkU0clNERnRUemsxUTJ4SlRFRXhObGRwVlhrdmJUa3lVMXBsZFV3d2JEWlJaRkpsUlRWUFQwcEljMjU1U3k5MlJqVjFiVXhCWnpKb2VHZExNME0zZVZsRmNXOU5NMjQzZW5kbE9GQnpabEZPUzFWVGRtYzlQU0lzSW0xaFl5STZJbUUwWVdaaE16WTVNRFF5WkdFME0yVmlOek14TjJRek1tRTVOelV3WVRFeVpqRTBZalptWm1NMU9ESmtOalpsTVRRd056QXpNREV4TlRnMFptTmhabU1pTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-code-and-convention-interpretation",
                "title": "Guidance for Code and Convention Interpretation",
                "docs": [
                    {
                        "id": "guidance-for-code-and-convention-interpretation-pt-1-vol-y-2022",
                        "label": "Guidance for Code and Convention Interpretation ( Pt. 1, Vol.Y ) 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbU5tTm5BMFdIb3lSMGhqZG1SMU16Wk9aMXAwYWtFOVBTSXNJblpoYkhWbElqb2lhWG95TWxZMlZYVm9RWFpXVUM5WVpqZGlPVGMxZGtkaGJVbFliVzlGY0RWaFpGaHdZMmxHYm5wbmNXNXpSRkpYWWpSTmVTdFlkbE15TUZWdllWZGhkWHBsYlhOcVpYcEljSEZRYzNKTkt6bHpaMDkxTjNwWGQxWlBla1Y1V1dGTlF6Rk9iVlZzZVdaMFRsSXZWMk16UjNoUlMwNWxUM05VWjBaM1EwcGhNMFp6YUZRNE1tOTVSSGRSUlVweFpsbHZlbm9yVFZodVFsUmpSbkpGWWxaWVpUZERXRGRIUlc1bVRqZFhORWxIUWt0Wk5ubFlaR1JHY0RGcFRrUkJZVlJuVWtoWU9VRlplR3B0VDBwM01VTXlaQ3MyTURaRVoyNXhaRFJqZFRGS2JFcElaVGR5TDNSamIwSXdjV1puU0hOMGVscEdOVmRVWTA1WFJERm1UMU5RWnlJc0ltMWhZeUk2SW1JeVl6Y3pPVFpsTnpOa01XWmlaV1ptT0dJeVptTmpNREk0TlRjM05tWXdNbU00Tm1aaU5tWTNaRFE0WkRjNU9ESTVNemcxWVdJME16bGlZVGhqTldNaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-design-wave-load-on-ship-structures",
                "title": "Guidance for Design Wave Load on Ship Structures",
                "docs": [
                    {
                        "id": "guidance-for-design-wave-load-on-ship-structures-pt-1-vol-aa-2025",
                        "label": "Guidance for Design Wave Load on Ship Structures ( Pt. 1, Vol.AA ) Jul 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbk56VkhoeFQzbFlNekJTZUhGWVFrYzNWemROWkdjOVBTSXNJblpoYkhWbElqb2lUWFl5YkVKYVFWUmhjSE5PTVd0VlV5dE5TbHBET0dsa1RFUkNUalkxVXk5cVpFMDFVVFIwTkRRellrRXJaamMzZERGbmVIRklWVTVwVUROTFRURkpRM0ZPTkhONmVqZFFiREZPWVdkdk5VTlZLM29yT0VveUwyTjZNMmhOWWpWcFkwMXhZV3gwYXpZd01HSm1PWHBaWmtWWFUycElORUpOZFhsbVExaFplRGg2YW1SS1lWRnhjVGsxWkVWTlYyUkNlVVZUY25VeU4ycG5OSFFyTTA5RmQxQTJlbFZZUVRKdmVtNWlPSGx1YW5WT1JVWnpiV3R2Y1ZCSk5sZFhiM2RoU1hWRk9GSkRUbTVrT1dGb09IRmtOR2szVFVseWRIbHdTMHQwUldvellqUlNSMlJJTDJ0S1owdGxlVlJqSzFSbVRFY3JPWFFyZVVSb2JVOHpiRWhyTkNJc0ltMWhZeUk2SWpKaU9EbGhOakF5WlRFd09EbGtOVEE1Wm1ZeVlXTmtaamN6TUdJd1kyUmlOams1WW1SbU1qWmtaVFF5TjJJNE1HUTNPVGMzTURabU5UZ3lNelUzTjJJaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-marine-industry",
                "title": "Guidance for Marine Industry",
                "docs": [
                    {
                        "id": "guidance-for-marine-industry-pt-1-vol-ac-2025",
                        "label": "Guidance for Marine Industry ( Pt. 1, Vol.AC ) Jan 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbWM1Y3pkeU1FOXdha1JTVFdaVlp6Vm1hRGxqY0hjOVBTSXNJblpoYkhWbElqb2lVMFpwYUVscVoyaDFNVmhOVFdaSk5DODJaVFVyTTBFNWFXdG5ibTVPT0RBMVdXc3pTM052YzBocE5HNTRUbGwyTWpWNmRDOUpjWG8zVkdaWWFVNHlNREJ4ZHpkWGRYTllUbkUxVEdKelUwNXlXRXh3UzFkeWIyMDBjVXRrVmtwMmVtVjFaa3Q1ZW05RFlrOXpTVWROYVZsa2JUWktUM05KYTJaRGVHNUJVR3cxTW1OS2JtSTBhRVJVVTNZeWJuaHNPRlpVWjJKTGRsWldZVnAyTkZoR01reG9lRlJCV0VwelJHMWpUV0V3Y1c1QlNXcDFOa3hzWWtrM1NqWlVWbW96SWl3aWJXRmpJam9pTW1Ka05XTmlObU5oWWpBNU5XWTRZVFUyTlRJeU1tUmpaakJtWkdVME4ySTNZMlF4T1RJMU16RTFOVGd6TVRVNVpETTFPVEF6TTJOa09EVTNOMlJsTlNJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-sea-trials-of-motor-vessels",
                "title": "Guidance for Sea Trials of Motor Vessels",
                "docs": [
                    {
                        "id": "guidance-for-sea-trials-of-motor-vessels-pt-1-vol-b-2019",
                        "label": "Guidance for Sea Trials of Motor Vessels ( Pt. 1, Vol.B ) 2019",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbWx5YW5sQlRXWlJSVlpQSzJWNlNHUlNlRFpNWm5jOVBTSXNJblpoYkhWbElqb2lVRVJXTDBkaVlqSndSalZ5TjFsdU5DOXNLMEY0TDFKVVVEQkdZVzAzVkROM2JVNVJSM29yVTNaVVpHbFBVVTh4Wld4clpUbDJhamR2VTJSdmRVUkNObmRVYVU5cmIyWkpXVko1TjJWaGJESmlRVkZ2UkRSbVJXeHROVEJDVVZwRFZUaFlOSHBOVlVWa2MxTjFNa1pwVW5KSFQxRlBNbmRpT1dNclRtcEtkSEpoU2s5a2FUaE5Uamt5Y1d4VWNYVjBhM1ZLZUhadk9XOXBNblE0V0ZkMVVsVlNkSEIwVkVacU55dDFaRWhvU0Rob1psbDFSMFZEYjJkeGJETk9SM292VERoMFpqQlRPWGw1UVhVdmFUaGtSV3gzVGxjeVUzVm1RVFJ6Um1NNFVHaFJVMk4yU204eWRVOTVkejBpTENKdFlXTWlPaUpqWWpFMU5qSXhZemt6TkRoalpUQXpZVGszTVdKaVpEUTJZemcxTVdObU16ZzFOR1JoT1daak1qTXlZbVF5TnpZMVpHTmpOVGxtWW1ZeE56WmlObU16SWl3aWRHRm5Jam9pSW4wPQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-sloshing-assessment",
                "title": "Guidance for Sloshing Assessment",
                "docs": [
                    {
                        "id": "guidance-for-sloshing-assessment-pt-1-vol-ab-2023",
                        "label": "Guidance for Sloshing Assessment ( Pt. 1, Vol.AB ) Jul 2023",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJalJqU21GVFFscHFXbUp4Y1ZNd1kxQlhZak4yVGxFOVBTSXNJblpoYkhWbElqb2lWMnRyUTA5RGNtMVBZV1pNYzJ4UlZUQkxUbEpuUlZoQlUzaDZRa3BVYm5Vd2QyRnVjRUZLYkVGTmVrZDBNVlpWUjFOUlZHcE9lRU1yUzJ0aVJGZExLMEZpVVZSTFYxTXhURVp1VGpabFUxRTJkbWgyUTFGNlUzUnNTRzVHVTAxSE9TdHFMMnRwUTBZMU1qbExRMjFQWjBoR2NGUTFNakYwVm14eE1XeDRPRmQ1WlRjelkzcE5RbTUwYlU4clFqWklUbkptTDNCME5HcDJaRzU1YVdreFlYbEtUM1pLUm5kVllqaExielZMYmtRd2JrRkJNM0o1VTNGWFFuSmplamxXUlN0d1VsTkRWRzE0WjI5U1NrUmhWUzlMYWt4d1p6MDlJaXdpYldGaklqb2lPR1UxWVdZellqWm1PV05sTWpGbU9UQXhOV0kzT1dSaU1ETTBOalUyTURZd01tTTFNak0zTWpaall6Z3lNVE5pT1RWaU5tSmpZMkV4WlRSbFpqUmlPQ0lzSW5SaFp5STZJaUo5&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-the-approval-and-type-approval-of-materials-and-equipment-for-marine-use",
                "title": "Guidance for The Approval and Type Approval of Materials and Equipment for Marine Use",
                "docs": [
                    {
                        "id": "guidance-for-the-approval-and-type-approval-of-materials-and-equipment-for-marine-use-pt-1-vol-w-2022",
                        "label": "Guidance for The Approval and Type Approval of Materials and Equipment for Marine Use ( Pt. 1, Vol.W ) 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbkI1V2s5cldIUTBhVzU0UVRSc2VrZEplRXRFTkVFOVBTSXNJblpoYkhWbElqb2ljRkJCUzJsTVVUZEthbUlyTlZKNE9WVnNlSEkyZDFsb01uSlhXRkpvV0hZeFZuZFpXQ3ROYjFwaGRuRjNhbUpYWWs1Qk5DOVZNMVZhU25KUmRHZFlTMmhWSzBNNFQwTnFTMDE2UWpWS04yMVVaM2h0ZUZWdVpXTnNUakJOVGt4WE1rRnlaRVZDZUZKdlZqWjNjVGRIUlhKelNGTXhRV2xaT0ROaGExWnpiR0l2VkZrNVlrUk9OSFZPTTFOSU9XTlRaelZOUzNkUk1XTlRlblZSWlRnNVNGVmtWMmhuVkZVelJVSjNVbGxDVFdsVVMydEhORVZyUzFkcWF6SXlRbGhKTXpVdmQwZFBZbVJ6YVhkUGJtY3piRlk0VW5WeEwyWm9ZVTE0VGxCRVl6WmhUVmhoV0U1dGQwSTJia05wWnpCSVNuQXhURVZUTTJSUVRFWXlLMjAxV1dSU1FUWlFOMHhxYXpKMGFYaFhiM2ROZVZsUllUQldWM3BEVURKcFZrUk5aM05RVkVSa015dEZTRWwzVDBKMldXeEtUbk5IWVM5WWNGcDNSVEo0VVdNaUxDSnRZV01pT2lKbFlXUTBNMkpqTldZeFpXTTRaRFE1TVdWa1l6STBNemcxT1RFNVptVXdOVEF6WXpZNE4yUXhNRE0zWlRFM1pHVXpOR0ptTWpObU5tTmtOekZqWkRnNElpd2lkR0ZuSWpvaUluMD0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-the-corrosion-protection-and-coating-systems",
                "title": "Guidance for the Corrosion Protection and Coating Systems",
                "docs": [
                    {
                        "id": "guidance-for-the-corrosion-protection-and-coating-systems-pt-1-vol-g-2025",
                        "label": "Guidance for the Corrosion Protection and Coating Systems ( Pt. 1, Vol.G ) Jul 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbll4YkRSQk1XVmxjVUpZWTNKSFNGWTJhbU5wTkhjOVBTSXNJblpoYkhWbElqb2lhVmxDYlVKS01tSjRSRGRRUTJsTWFHZHlPQ3RWSzNZelUxTkljRGc0Vnk5dWR6SjJSMms1YWpST1lWcHdMMGRRVDIxYVZrRjBRVGw1ZW05eVZESnJPVTlhUTJGMFpFVmpWV1ZOTlhwaGFXTlpRekJIUnpCU1VHcENOVzl2ZFVzcmJtVXhUSFpoYW1WV1NFbHRWRWcxWTBaRVRsSktkVTB4TkhwS1JXUTBPV3d5U0dkRmRVTnRlRlZLYjNaUk9FZHdaMkpaZUVJNFl6VnRSMEZLY2pWaGNYVlFNVlpYVUVWS2RHdGhjakUyYzBkVWVEWlJhWHBOWVRKVmFYSnBOVTF5YWk5RlkzTkJSUzk1V0RsSldrRmtTRE0xVTFOYVVpOUhhRFpEYjBsVEszbE9jbEI2T1Vwc1VYTjFSRzFrY3poSWRUaFNZMFk0VHpjd05rdG5jbVpJZURWeGFDOTBUMUJ1Y0ZGR2FVeE9ibXQzVlM5YU0xRTlQU0lzSW0xaFl5STZJakk0TkRsbU5UQXhOR00yTVdaaU5XSXpaVEV5TW1ZMk0yRmxNak0zWXpRMU9EYzJaVE0xT0dJNFlXUTROMk5pWXpsbFpHRmtNMkV6WlRRNFlXTmhOR1lpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-the-design-construction-and-testing-of-pumps",
                "title": "Guidance for the Design, Construction and Testing of Pumps",
                "docs": [
                    {
                        "id": "guidance-for-the-design-construction-and-testing-of-pumps-pt-1-vol-v-2024",
                        "label": "Guidance for the Design, Construction and Testing of Pumps ( Pt. 1, Vol.V ) Apr 2024",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJaXR5VDFCVVlsQmpOQzkwUzB0VVJYSllWVUp6TWtFOVBTSXNJblpoYkhWbElqb2laV3hUVkUxRGVGTkVNVXhGY1ROeGJ6ZEZUbGMzY1VnNWExbFlVR1EwYWpBd1JIRnRjazkxWlVKemRIVmhRemd5U0RScFRtNVRkRVoyV2poamIyNXdORFY1UlRSdGJrRXJWREJ4TmtzdlV5OWpiMU5oU2pNeGVGSm1lakF2Y1hsbVlraGxhR2RxU2tVeVQyTlhRa3RHYm5OT1lsaFJkM2c0YldsbWEwOHhVbGhNTTA1TlJYbE1Zak5WZUhVMmEzRXhURkVyTTBOT2FERTRlU3ROTVhsV2N6UkJUREpaVjFaWmEzTTBjRzVqZFRkQ1ZVMHZSMVpzY2xwblQzUTRiM2xxVEVGdWFtaFlaSEIwYkZoU1UwYzFObmx2Ym5CMGVVOTNZazlDWkM5SmNYRm1ZV0pqV0VOSU5UTnRWazVxV2k5VFF6TTRjbTFGVURoMVdYcDNXWGRwV0drelZEbHNMMGN2WkN0SlNpOUthVlJHVGtWb1lXYzlQU0lzSW0xaFl5STZJakZqTkRaaU4yRmpNV0UxWmpFME1XTTNZMlJpTjJVMU1HVXdPREprTVRsbVl6ZGxaalEyWVRBNE9HTmpNRE0yWWpWaE5UVXdObUkxWXpKbE5XUXpNRFVpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-the-inspection-of-anchor-chain-cables",
                "title": "Guidance for the Inspection of Anchor Chain Cables",
                "docs": [
                    {
                        "id": "guidance-for-the-inspection-of-anchor-chain-cables-pt-1-vol-d-2002",
                        "label": "Guidance for the Inspection of Anchor Chain Cables ( Pt. 1, Vol.D ) 2002",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa05ZVDJKTFdVMWFiemN3Um5oVFUzQllXVWRxVW1jOVBTSXNJblpoYkhWbElqb2lUbXhvTUhseVVYaGpObTR4YWxvNWIwRTBaa1JpV1VKbFRGRkJZbVpzWkROdFYxZ3hSMHhtTWpoTmRtVjRObE0wYWpsNU5rNTNWRU16UjIxWmJFTlBVWFp1UkUxbVVYSTRjRm8zU1hOelJFcDNTV2N6U1ZGRFVHTklSa1pDYzB4SmNVTk1USHBtZVdKUlpGQkpVV0Y0U0RFMFMxUlhaRTVSVDJwYWEwZHZhMmxFZFcwNGRuZHpNRXRNVlZSaU0wMVNhak5HZVhwb09WRndNSGhwV0V3emVYWTRUV1p2Y1dzMU5rdG9TbWxVZVdKWFJITjFVM2htY1dwMU1Vd3ZTVEZIYzBsNGNFVkVVV05VWVRSNmNraFpNM1EyY1ZKMlREZERXR3hrTW1GeGVsRkJaR3hsTVU5NVRsTmhWRGgxY1hCS2FqUnhLMDAyV0cxWldUQTRhbGd3V1NJc0ltMWhZeUk2SWprMU5EZzJOV000TmpBM00yWmhNVGRpWldSaU5EazJPV05oWVRFMlpEQmxNREJpWldaa05tTmxPVFl4TlRBeU5HVTVOVGt3T1RkbE1XTm1NemM0TWpZaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-ultrasonic-thickness-measurement-report",
                "title": "Guidance for Ultrasonic Thickness Measurement Report",
                "docs": [
                    {
                        "id": "guidance-for-ultrasonic-thickness-measurement-report-pt-1-vol-c-2006",
                        "label": "Guidance for Ultrasonic Thickness Measurement Report ( Pt. 1, Vol.C ) 2006",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbmh2VkVwTVdrZ3hjMHRMT0RSVFYyZEdXbFkyY1hjOVBTSXNJblpoYkhWbElqb2lSV3BKV2xOMlEwVk9hakZQY1dGVU16TnNVVEJwTjFWVk9Xd3hNalZYVDAxcVZVaElVMnBsVUc5VVJrbHhlako2T0dNNE0xWXlaR1ZxTkcxeGFsWmpMek52VFV4R2NHMXJURGhhS3pkcFVUVnJlVE5HYVdGamNIZFJURXRQZGsxMldYQTJTM1JMZW5KT1RVTkRVblJqUVZSbk1qbGxWSGhQY2pCVFkxSnBhM2xJY0dzNE4xSTBUVlJUTTBSWmVsRkNVMUJzWm5OemNsSjNWakpLY1ZKUVdIQlBlbkp4UWpoakwwTnpNVVJQUVRSa1MyTmtkVlp3VUZad01tZFhURGxOVDNGck1rSndRWGd3Wm5oaFF6QklaRlpuYlM5WGRtaEJVbXBVZURGSmVVTjRUMWhCTm1GSVpFeHBPVkZyUzFST09VVkhhRkFyTkc5WmJ5dFFjVTV3UWlJc0ltMWhZeUk2SW1RNE1UZzBZbVpqTXpFd05tUTJNR0ZrTW1NNU1UTm1NMkl5T0dWbE5XUmlZbU5pT0RGa01UQXhNekU0TURFelkyWmxOelZtT1RFeU5qWTJOVGxrWlRjaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-ventilation-system-on-board-seagoing-ships",
                "title": "Guidance for Ventilation System on Board Seagoing Ships",
                "docs": [
                    {
                        "id": "guidance-for-ventilation-system-on-board-seagoing-ships-pt-1-vol-a-2025",
                        "label": "Guidance for Ventilation System on Board Seagoing Ships ( Pt. 1, Vol.A ) Jul 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa2g0YkZORVZ6UlZibFpKYmpoMVl6UkhWSEZCYkZFOVBTSXNJblpoYkhWbElqb2lSR3cwVDA1c00zazRWMWcyUlM5NFp6SXdUMjF1Tm1OM2VUVkVOSHBoV0hCaFluVXdWVU56ZVZWaVZrMUdPWFJ3UmpNeVJHUnhhRWRzWTJOTlNuQmtOV04xYTBZeVJHWnFSR0kwVkZadlZEWk9LM2RvVVVGTWRHSTVkRkEzYUVaSlFXbFNXbEY0YW1aSFkzUjZXSFpNVG5kWVoydDZkSHBUU2tNemRFZHdlRE5xY0ZNeGFYTkVVa3RoWTBOelJFdEdhemRKVFRsWmF6RlNVWG92YW5vckwyTjFlVkpRY21kSlJGQlNVV2xETmtGVFZTODFSalpUVVN0dk9GcFlhalJXZDJoWVlYUm1Za2N4V0ZkdmJtZEJiMHhEWjBKSVFVeE9ZV1p1Y1U5dmIzTkpORXRzYzFneFlWTTRVV2t3WjJ3eVNtczJlRk0wV2pNclV5dGxOVVZ3U200eVJsZzVkR0ZtYlVzek1FTklUVXA0YmtOdGVsRTlQU0lzSW0xaFl5STZJbU5tWW1Rek5tRmlObUl6TTJSaFl6azNOekE0T1RFNE1tSTVZbVl4TWpJMk9Ea3daREJtTVRReFltSmxNemxpWWpReU5EazNNamc1TTJWaU1qZzVZak1pTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-on-review-and-approval-of-novel-design",
                "title": "Guidance on Review and Approval of Novel Design",
                "docs": [
                    {
                        "id": "guidance-on-review-and-approval-of-novel-design-pt-1-vol-z-2023",
                        "label": "Guidance on Review and Approval of Novel Design ( Pt. 1, Vol.Z ) Jul 2023",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa2syVEUxNFlXNTJaSFl2UjFOb1VYUXplVEZ0ZG1jOVBTSXNJblpoYkhWbElqb2llSGRwVG5WT2RHSnpXWGc0TkhWV1JXSlZZVGRuTkU1NWIzaDNSSHBOUzFWcmFFUmxPWE0wUzIxalRWTmFlVnBMUlhSalZWbEpTMHhQU1N0MEswbGFRVGRZYzBkd0wxbEtVRU13YmpScmJFVm9Ua2x3VWpBeVkyVjNhV3RwVTJaQ1NHNWpWR0l5VjA5Sk1FTlpaRk5vVkRWWVNqZzNORUk1Y3pKSmRVWjRlWGcwTWxGUWIzTlhWV3hGVDJsUVNFVlZjM1JvT0d4aFlYRnVWVkJuYUhrNFFXTktlVFYxZDB0RFJqWTVNa3RGY2tReFpqTXlRWHBPTkZWV1JYSlpObXRUTmtSWmR6QlZMelZVVTFoRmNuTnROa3A0TURCM01FSlBUM1JQUXpGWlRtZEZZeTkzTlU1cGFrTkdTV2g2YjFSMVJEVklNV3QzZHpka1dUWm9aR1p3YlNJc0ltMWhZeUk2SWpGaVpESmlPR1U1WVRVNU9XUmxNMlEyWWpCbVlqRmhOR05sWXpCaU1HVmhNbVkyTURSalpEUmtNVFl3T1RsaVpXTTRNamhrWmpCbU1qUXdNVGczWlRZaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-analysis-techniques-strength",
                "title": "Guidelines for Analysis Techniques Strength",
                "docs": [
                    {
                        "id": "guidelines-for-analysis-techniques-strength-pt-1-vol-6-2005",
                        "label": "Guidelines for Analysis Techniques Strength ( Pt. 1, Vol.6 ) 2005",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJblE1ZFZSNk1qSkhSMmxxUjJ4eE1uVlJXV0pJTVZFOVBTSXNJblpoYkhWbElqb2lLemR1V2xoeFRFeHRlVmRhTnpGMGQwczBObE00V2xWUFpTdEhWWFVyVlVwelNFWnVVa1ZIVVdod1JreEhaazAyWW01TVZGQTBhMU50TlhGRVpuTnJSMEpUZGpsb2RtUk9iR1JEYVhsb01UTTNkRUpNVjBOSmFGSlNjRVZKUm1ZellUWmtZbTVNTkVSRWVWcFBSMVpsTW5GQlpVVlpObkJ2YW1KalJYWm1lVFZqT0dwUE1FWlRVVUpVVGtGVk1sTkZSRkV3ZFhkamIxVm1hRlZNVkVGTE4yc3pTbk56VDJoak1IWndhRkZTVldVdmIycG5SVlJUWmpKeGRGbzJWbUp2WlhSdFVXSnNja1ZETlZacGNFRldNV2x3YzJGWE1UTkpaMDR3V21wbVFtWjVZMjEyWlZrME9GcGhWVDBpTENKdFlXTWlPaUl6WW1NeE9UZ3pZakJrTlRFd05HTTVOakk0TmpjNFl6YzNOR05oT0RVMFltUm1NbUptTkdGa1kyTTRaamd5WkRnNE5HRTNPR05pT0dZNE5ETTRPR1F3SWl3aWRHRm5Jam9pSW4wPQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-condition-assessment-program",
                "title": "Guidelines for Condition Assessment Program",
                "docs": [
                    {
                        "id": "guidelines-for-condition-assessment-program-pt-1-vol-11-2015",
                        "label": "Guidelines for Condition Assessment Program ( Pt. 1, Vol.11 ) Jan 2015",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbU5rVWtwTlIwWTFVRmxSU0VSVU0xbEpNa0kxZGxFOVBTSXNJblpoYkhWbElqb2lMMGxOT1VGNVFucDZkMUY2VVhwWmNtNXRUbmRIV1VJdlRFUnBjbXRITTBod01FVklTV2hzYUdjMFQwVXhXbUU0Y2pReE0wcFJTa3RWVWxwUUwxVm9kWGRUTVhWek5GRjNNSFJyYjFkRlluUnlNVlJYTTFCQ1NXTjNTeXRNYTIxa1RHZFhNazlHVXpOTUszcEZNbWRQVW14dU4zRlJhamRMV0VSb01VZzFhMVJ1Y1VoNVFuWnpZWGRWSzB4RFVFbG9ZVGxGVWpaYUsxRktielJYYTJKUkwzWnNRbGszVjNOVmJ6QkJWbTlOT0hSeE4wRm5jMWRzV1VGb2FIZG9RamcyYmt3MmRsRk5lVFpzVlVnMmQyeDBWM1V5UlVnNE4yOHpSVEp4ZGs5ellra3ZaV2x0ZUVGMWFUaFVZbU5pYUc1NUwzb3pZek5KZG5CaWFFMDRPREpOUnlJc0ltMWhZeUk2SWpVMk1XTXdNR1E1WXpWaU5ERXhPV1JrWVRRNE9HUmhabVU1WlRReFlqRXpZekF3TldJMU5tTmtaR1EwWVdZNVltWm1OMlk0TUdKbU1tUmhPVFV6TXpJaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-electric-vehicle-carrier",
                "title": "Guidelines for Electric Vehicle Carrier",
                "docs": [
                    {
                        "id": "guidelines-for-electric-vehicle-carrier-pt-1-vol-14-2024",
                        "label": "Guidelines for Electric Vehicle Carrier ( Pt. 1, Vol.14 ) Sep 2024",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbGxUU21ZMGIzWkdia05WZFc4d2J6UXhjWEJVTkhjOVBTSXNJblpoYkhWbElqb2lNMGxuZURScmIyTTNkVmRIVkRSS2QwWlZNM2hCTTFGRGFWcExSMUpoVlc1T1VGcHZhbFV3ZERVd2JHdDBiWGQ1Unpka1owcHRlRlZHVWtNNWMycGlNV3RsVkhSMFNFa3pjWGcwT1ZodVJISXlZVmt3ZG1ka05sb3lUelpGTm10T2NUSTJNVmR3Y2xKNGN6SkJURnB2U0RkR2MwOVNWM0Z0ZUhKWVdYZFBaemxrVDBSQ2JtbEhNMjFxVm5sSmExcDZVazF3THl0V1VUSmtWbmhqY3pSeU5HOUJWVXRxWlRadVdqVkJhRFp3TkRGTVl6SndXR3cxYmpNclFYbHBVa0Z2TjJ4REwwcHJTR3R0TXk5MFVqSnpTMnR1Y1hFMGIxWjNPVWxaTVZaTGNWUktNVXhOVkRCRk1sZEhRVDBpTENKdFlXTWlPaUl6WVdSbFpUSTFaV1ExT0dVeE9ETXdNamxrWW1Rell6RXlOV1V3WVRJMVltVTVZek5sTXpKaE9HWTNNV0l5TkRGa01HVTJaVGd6WmpZNE1EWXlNMlJoSWl3aWRHRm5Jam9pSW4wPQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-inventory-of-hazardous-materials",
                "title": "Guidelines for Inventory of Hazardous Materials",
                "docs": [
                    {
                        "id": "guidelines-for-inventory-of-hazardous-materials-pt-1-vol-15-2024",
                        "label": "Guidelines for Inventory of Hazardous Materials ( Pt. 1, Vol.15 ) Oct 2024",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa0p1ZFd4alduRkNVbWhvV0VOdE4zazJTRWh6WW5jOVBTSXNJblpoYkhWbElqb2lSbmRQWkM5U09GaHBMekJYV1c5Q1QwSkhhblpZVVV0SVlqWnFXRWRSVmpscWFsVlFlSGRoZUVNelZFdFRaak0xZEVKSlVrcHFlVmxaSzNJMk1UaENiVEY1WTB0M1NuUTVkRVpVWjNaRlZYZ3lUbkJUYzNoRk5tTlhiQzgzVFcxRFMxQkJRa0pyUjBOd09YRk5SMjFTTW1kbVpsY3hTRk5sVUhRM2IzWllVa1p2YW5KWFpqWldOR2MwY0dnelVYaEZRbGhRT0hOMFZsbG9NelpIUjBOWU5XUllOelJwTmt4eWFFUkpVbnBMVldSNVpIQnZXbmhHYTNCSk9WWlJWa0ZpVDNaWVpqRTVOREZqZEVKdlRISTFjM3A0U1doRFozRm1aMFF2V0RGVVpqaFlaRmR3VDFaVlZHdHFhRGwzZUVaWlFrcHVSbmRMTTJsS2VUTldaa2xOVlNJc0ltMWhZeUk2SWpoa09EQXpaR1ZqTVRrelpHWTNaR1kzWTJZek9URTROak5tWkdJell6bGtZamcxTWpNNE5HRmhOekUzTjJWbE5qY3pNRGhtTWpsaVpHRm1PR05pWkRJaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-machinery-conditioning-monitoring",
                "title": "Guidelines for Machinery Conditioning Monitoring",
                "docs": [
                    {
                        "id": "guidelines-for-machinery-conditioning-monitoring-pt-1-vol-3-2011",
                        "label": "Guidelines for Machinery Conditioning Monitoring ( Pt. 1, Vol.3 ) 2011",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbEkwY2tGTGVHczNkaTg0Y1hKYWMxZzVhVmx2U1hjOVBTSXNJblpoYkhWbElqb2lPRlowY2xCTk1YTmhhVWMwVjFGbFpYUnZibFJRUnk5U1JtSmxVMFIxUmpKdmNVVXJUVVkxZFU0d1VuQnRTMFJPZVdSc1NtMW9SemxGTURGNVVtcG5TbXBYU1RaMlRucFVaMDVVZDNsU2RHRXJPVXR1VEhKaloxSTJXbkJPZFRSc00zVm9hR2hpSzFoRFRHbHJlbmwzYmxjM1dteHhTR0pQY3pOVFRWcDNSRFI2ZDBGMWMyWjRNM1J0ZEZsd00xRkxTbnBaVVRCdlUyTnNiMVJCVUhGVFp6QnNWekJ1Y1M4Mk1UUkZXbnB3YlRWblIwdEthbWRvYTFwMWN6WnZTRkJCU1RCa2EyNDBXRmwxTlhCSmRraEVabkpaVVVGVlNGVndibXhIYmpaSFRVOWFOemxOVEZaa2FXZHdkREpGU1VsUFdXVnFVRkp6UW5WTE9HZGlOamRvZFNJc0ltMWhZeUk2SWpBNU56azJOREEzWXpBd05qZ3hZV1ptWkRZMVpUTmtNREF4TVRrMk1XSXlORE5rWW1FMFlUVTVOR0ptWlRoaE1qVmlPVGswTXpnd1pEZ3lOalExWVRJaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-safe-ocean-towing",
                "title": "Guidelines for Safe Ocean Towing",
                "docs": [
                    {
                        "id": "guidelines-for-safe-ocean-towing-pt-1-vol-12-2021",
                        "label": "Guidelines for Safe Ocean Towing ( Pt. 1, Vol.12 ) Jul 2021",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbGxWVlcxNGRqaGlSamwxZERKbVZHRlFWbmxNUkVFOVBTSXNJblpoYkhWbElqb2laUzlHTkdNNWVuZzJUVVZvZFZCaGFUUlhlbEIyVXpaVVFtTTBWekZVWWs0eVVsZGpTSE5NWVM5aEx6UkxUa1FyVEZCUmIwbExlbG93YmxkV2JtOHhWRzV1YTFreWJYUTVSbHBEVEZZd1IyMTRSVGhSTVZoc1lXdFhVSFZMUzBobWRrODNhSFZSU0RVMWFUZFplRTl4ZWxNNVRIUnhRblZDUTBNNGRDOUZLM1JDWTJKT01rSlFVbFZoT1hGb1JWSnJObWRMTTJSRU1VNVFRall4UkdoVmVuUjVOMGd2WXpBMFFWTk5NV3B1VkVwdVZFcDZaMWczTWpaTVVEQk5jVlpLUVVGcFJUTlJTbWR3YTBaT1dIVllRWGhPU25kcVVUMDlJaXdpYldGaklqb2laalU0TkRkaU5tVXhaRFpsWVRBNFltTTBZV0ZoWVdFeU5XVTJNR014WlRnNU9EZGlPV013TTJNMll6VTFZVEUwWTJKak9UVTVOalUxWldJNFpqUXdaaUlzSW5SaFp5STZJaUo5&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-ship-recycling-facilities",
                "title": "Guidelines for Ship Recycling Facilities",
                "docs": [
                    {
                        "id": "guidelines-for-ship-recycling-facilities-pt-1-vol-13-2024",
                        "label": "Guidelines for Ship Recycling Facilities ( Pt. 1, Vol.13 ) Jul 2024",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbXg2T1dwclZsbEpWRk5XYnpoNlpVUkthRVUwTmxFOVBTSXNJblpoYkhWbElqb2lNbVJOYkVOUFYwSnVTakpZYjNZd1VXRXpXbWRvUm5sak5tcDVWVUl2Y0VjemRXRnFNa05LTjNWbE5IUkZlRGR4YWxoTk9YUndabGRWY1ZOdU1VazFSemhIYmxGMWVsRlhhMGhoVUdVclEyaHpjMU5hY1dnelZEWjVVV1JXVVU4MVZGbzNLMmRPU2xseFowNDNlR01yT0VkT1pHeFhTMWRETjJOeE1rMWpPWHBvVnpOS1MyTkVMMG8yWVZreGJtOUJXRVUyVWtWbE5tdFBZbVp0WkRGelRGQTFTblZTVjBaNVdFOTNSbmRzWkM5RGEyVktOblpVVTJ4cE9GVllVa1ppV0VadmNqRlFSVE5wTVVsdGFHMWhlVlF4ZUhkRk9VSkpTMEU0ZVUxb1VtZzVkVWhOYm1KUGFFdE5hejBpTENKdFlXTWlPaUpoTVdVeFpURXhZak0xTVRBeFlUWTBaVGhrWVdZd09XVmpOek0zTldFMU5EQXpNVGhsTkdFM05XSmpaV1JoWkdSaFpXVXhOV0V5TTJKbU1XTmhPVEZqSWl3aWRHRm5Jam9pSW4wPQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-ships-intended-to-carry-compressed-natural-gases-in-bulk",
                "title": "Guidelines for Ships Intended to Carry Compressed Natural Gases in Bulk",
                "docs": [
                    {
                        "id": "guidelines-for-ships-intended-to-carry-compressed-natural-gases-in-bulk-pt-1-vol-10-2017",
                        "label": "Guidelines for Ships Intended to Carry Compressed Natural Gases in Bulk ( Pt. 1, Vol.10 ) Jan 2017",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJak42U2psbldpOTVTMjFCYlRWSGRGZHRSbk5sYTFFOVBTSXNJblpoYkhWbElqb2laRm96UlhGVWFrNXpUa2xtT0V0RmVXeFdWVkJUYW1jdlJGaDRTRkZuT1RaV1dIVm5aR2hWVkZWTGMyNW5XbEJ0VUZwTVJrZE5OVlZqVlZwRGREWlBaM1owVm5vcmFqbGlRbll5WVZsVVpHMDJiRm95YW5adFEydFlURE00VFZVeloyTkpNRm96U0RGcFZreFRSbkpSYkdkTWN5ODJWVE5qWm5acVVqUkhlak5FVEV4ck5tRjRNMlU1YTNCRU5reDNlSFkzZEdwbE1ERkNVMFV5VUVSTFpsUTRjVFEyTUhCbmJUTXdjbEY2T0UxMmFFcGhhMnRVUkV3MFpWbGtWa001UjFsMlRHcE5MM2Q0YUVwV1JVZDVSVWRxTURWVVJqQnBaMVZQUkZSSVRFTnZORFIwVFZoRlRFRTVTVll5YzJRM01VdFRWMk5OY0RGYVIwSTRRbFUwUmxSbmIwZEZUVmhHTmtseFpYaG1SMFJ6ZDNoaldVZGhiRTgzY1dzeWNVbzFiM2syTVZSdE5WTlNSVmR4UjBjd2NWa3ZUM2RLVG1wbWIxZEhaR3hwZHpNaUxDSnRZV01pT2lJMVptVm1aRFE0TURZME1HUTFZVFEwTlRaaVptWXlOR1JrWW1VNU5UVTVNV0ptTm1JeE9HUTRZbUUwWW1WaU1qQTJOMlk1TTJRNU56WTVNR1F4TURWbUlpd2lkR0ZuSWpvaUluMD0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-the-carriage-of-refrigerated-containers-on-board-ships",
                "title": "Guidelines for the Carriage of Refrigerated Containers on Board Ships",
                "docs": [
                    {
                        "id": "guidelines-for-the-carriage-of-refrigerated-containers-on-board-ships-pt-1-vol-5-2004",
                        "label": "Guidelines for the Carriage of Refrigerated Containers on Board Ships ( Pt. 1, Vol.5 ) 2004",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa2g2ZVU5cldFNTBTa3M0Wm1aUVdtRmhUMkZqVEZFOVBTSXNJblpoYkhWbElqb2lSbXBEWVZkRVRERlBNbnBNU1UxTmFHTTVOM1V2UjJjMlQzQmFSaXRuUkN0NWMzcGxOMHhoTlVvNFZVRkZTM2d4VkRaUU1tZElTa28wU1RSS2N6SkplV0pLWjNwcFVGbENUVzlETlRSU09FUlpUakpCWkRCRWFqQnpTR2MyU1VaNllVMDRVM0JoYWxSVk5GWnNZMjkzUVZCc2ExVnpjM0ZKUW5RM055OXJaM1pHY1V4bmVqQmhLMmdyVjNGUVRFOWhOVTFIYTNkUVpWQTVRbEJXYW5oMU1WVTRXV2hWUlZoTlRWWklZMkppYUhWMU1GTTVNbTByZUM5dldraFhUemhJYVVkS01YaE1WRzB4ZFVkbWVFbERNRVJ5VVVjMllUWkVaMFJLT0RCNGNIZENVa3d6TVRKYWJHUk1hRlZhT1hGa1lXMHJlRzlxYTFkRVp6WkRhbEJYUW5BdmRuQmpUR3hWU1VkVWQwOUtkRVZqU1ZBMVdWcDBTSHBRZURCTk4yOUlVVTlRYUhwbVNUVndaV3Q2VTBrMFIyMU9VVFZKTVN0VlZ6SkdSa2gwZFZRaUxDSnRZV01pT2lKaVltRTROREE1TmpRMVlqUTFaRGc1TVRFek5XSTVZV1U1TURWbU1UWTVNRFF4TW1FM05HUXpabVZtTjJWak5qRmpPVGcyTnpoa04yTTRNVFZrWVdSbElpd2lkR0ZuSWpvaUluMD0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-the-use-of-gas-or-other-low-flashpoint-fuels-for-ships",
                "title": "Guidelines for the Use of Gas or other Low-Flashpoint Fuels for Ships",
                "docs": [
                    {
                        "id": "guidelines-for-the-use-of-gas-or-other-low-flashpoint-fuels-for-ships-pt-1-vol-1-2025",
                        "label": "Guidelines for the Use of Gas or other Low-Flashpoint Fuels for Ships ( Pt. 1, Vol.1 ) Jan 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbVZWVDI1NmNIRjBRVkl2Vm5waFVFOURaM2RhU25jOVBTSXNJblpoYkhWbElqb2lNSFY2YzNwWk9UaE5ia2hZWW5jdlJsUm1MMUkwYlVkalZqWk1RVGxZY1ZOaVFXUmhkWFJTYm5NelJXRkhMMVpxVWxweGJWaDRNR3dyUlZkM0wzZFFhazVCVm5acFZsaG1WbUpCYTFwR2ExbDVVM2Q0VTFrd1RtWlhiMWxIY1haclIwUmtOaTk2VDFGMlNIZEpjSE5TVlc1RFVsRlpMMlpSU25WMVJqbFBOamRTWkRFMFNIQTFPRkpYTUdFeE1FeE1WblYzTm5aT1V6VjBSM2h2Vlc0NFZ6bGlUVFo1TVhGblZsVnROV04yU1dwblRFWkVXbWxCTXprMGVWVTFaSFJGWkc5dmMxQXhVbkkyTW5KRWVIUmFPVzFMUTIxWFFubENXamxYTjNBNFdHMDVNMWxvVjAxUmJVUndLMUU1Vm1SM1l5dDNVbXB1VmpKTlFuQm9aMVJvZDBKVFZpczRlVFk0TmxJM2RYZzFObWs0UTJKUU9WbHhWVFl5VEZsNWJGaERTa2c1ZWpaQmREQlhlVzV0YzBKWWRURjFhSGsyYmpGWFMwTlFaVTVvY3pVaUxDSnRZV01pT2lJMFkyUXlOMkV4TVRkaFlUQmpZbVprWm1NMk1EQTJNVEZoTldNNE5tVmxNREk1WVRZek5EUmlaRGcwWlRNelltRTVNVE15TjJZeU16VTFNVGRtTW1ObElpd2lkR0ZuSWpvaUluMD0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "iacs-common-structural-rules-for-bulk-carriers",
                "title": "IACS Common Structural Rules For Bulk Carriers",
                "docs": [
                    {
                        "id": "iacs-common-structural-rules-for-bulk-carriers-pt-1-vol-xv-2014",
                        "label": "IACS Common Structural Rules For Bulk Carriers ( Pt. 1, Vol.XV ) 2014",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa00zZDI1TlVXOUpNa280VTNZM1dWYzBhVkJMU0ZFOVBTSXNJblpoYkhWbElqb2lOV0p5VFhZclVFODVkVGN6ZFhZMk1FUmFUa0ZQWTJOSk1FaDRUVFpKTkcxbk1YRTJNSE01TDIwdmFYWXhNV1pYTlVwbFFWRlNlbGxVWTJwV2JrWldPRzVRUlRodldXRXJVVmRCTkd0bllURjFjMWgwVUVGdGNuTlVkVmRPZVVOaVNsaE1PWEJWTWxNMFRIcEhlR2RKTDJoR01uWTRSSEl5YUZCeVZtdFNaMnBHV2psRFFYb3phbWx4VDB4bVIwZFNRMHhtT1dsRFdFSldVak5wZEV4cmJsQmxkalZxT1ZZNVExQlZNMll3TDI1UFN6WkdTalZJYzFWd2FrUmFiRWhIUVROTE9IY3ljVzh3YlZCaldqSldTbEZZYUdoblZVbHhaRXh5UzNoMlNWUkphbU5oWTJSQmJGbE1ZMjF2WjJobmRrRkJkR05OVTNZclZUaHhiRmxsUnlJc0ltMWhZeUk2SW1Kak9EazJPRFl5TVRoak16SmpaamhpTmpVNU9XVmlOREJpTkdReE9EQTNOamRpWVRVME5HSmlaR1ExTTJabU56WXpNemt3T1Raa056a3hZVGRqWlRRaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "iacs-common-structural-rules-for-double-hull-oil-tankers",
                "title": "IACS Common Structural Rules For Double Hull Oil Tankers",
                "docs": [
                    {
                        "id": "iacs-common-structural-rules-for-double-hull-oil-tankers-pt-1-vol-xvi-2014",
                        "label": "IACS Common Structural Rules For Double Hull Oil Tankers ( Pt. 1, Vol.XVI ) 2014",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbkZWUW1kbGFGbFVObEoyWTJwNE5uRlFObTFWWlhjOVBTSXNJblpoYkhWbElqb2lUQ3RrUkc1cldrMVBVbWRzUlZjMU0wUndOV1Z1YlhScUsxSkRNRVZQWW5oRk1Hc3ZWVEEzVmtsVmJUZG1Rakp3TTJ3d2JGSnhWazlvYmpWTGNURnJhMDFzWlN0WGRGSm1RMnR5ZWxReVdqSnlNV1p5Y25OWmRFVTBjRU5tWkhOMVNrcGtObnBDTms1MVptWlBMM05DTTJSSlYwRTVPRlpMY204elRUUlBWVTB6TVVOdU9FOXZlVWwxWWl0VU1ITTFOa2h2YXpWT1pFaFNjR1pKUVN0TGIwMHlTR2syU0ZKTGRIWjBNRXBDUW1OQlEwZHFUVThyT0dSbU1EUnZSamhLYnprcmMzUjNUVGh1UkdWWGVrOWpZbVJSVmpOUWRWbFJWRXhMV0c5aFdFdFdjazFVV1V0SU9GZFlPVVZQTUhrME1sSlFabVUxTWk5QlNHeDNZVTlPTmtGc1J6azRWVzFUUldVMFZIQktaVVo1ZUM4ck1WRTlQU0lzSW0xaFl5STZJalkwT0dNNU0yRTFNRFUwWkdFMk4yVTFZamhrWXpGall6RmhObUkxWVRVelpUWmxPRFE0WXpBME9EUTFNREJtTURneVlqQTFNamszTTJVMk56UTBZVE1pTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "petunjuk-klasifikasi-dan-survey-kapal-notasi-a90-dan-a80",
                "title": "Petunjuk Klasifikasi dan Survey Kapal Notasi A90 dan A80",
                "docs": [
                    {
                        "id": "petunjuk-klasifikasi-dan-survey-kapal-notasi-a90-dan-a80-pt-1-vol-i-2015",
                        "label": "Petunjuk Klasifikasi dan Survey Kapal Notasi A90 dan A80 ( Pt. 1, Vol.I ) Jul 2015",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbTlDTjJGVE5scFhkV3MzUTFZeVJXMDRWMms1Ym1jOVBTSXNJblpoYkhWbElqb2lWV3hZUTJKWFMyWTVhVEZwTVhWTE5IQTJaVlZuWVZWV2EzQnJVMmxhU2s4clRuTmhUbXcyVHpKcVNFUlpla3dyYTFGV1VHTmFVazE2YmtNMlIzWnNiVWd3V1hWcFVtWlFXbUZLVkRaM05rOU1XbUpZVWtZd1VDOVBlak16Vm0xSU1qRm5TRzh3Vms1eVltaHJPRWRoTVVKdWQydFpTVVJKWms1aWFIbElOVXRJYTJFeVpuUTRVVmhzYW5KdWNIUlVjMDFuTWsxU05EVlZRMnA1VFdGM2VscDRZV2d6VGpCVlVHVnVjR3RhYml0R1QybzBSaXRyVFRGUFYybzNRelkxVUVvMmNVc3hPVW8xV1Zodk5UWkNjVmxXWjFCV05WRTRlRUpaY0dwTkwwSTNlVlZsVVhSaVprODJTR2xtTXpoMWR6aEtWRFUwUkc1QlNXd3dTbW8zUlRVM1NHSkNSVXhFZW5OaVRUWXJWeXRHTVhWdmVFRTlQU0lzSW0xaFl5STZJbVV4T0RnM1pUWXpNemd6T1dVMFlXWXdNMlpqWkRCbU4yTmpOMlUzTm1RNFpUQXpZekUzTW1SalltUmlOR1F6WWprM1ltSTROV1ZpTnpWbVpESTFNamNpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "petunjuk-pelaksanaan-standar-pengukuran-ketebalan-konstruksi-lambung",
                "title": "Petunjuk Pelaksanaan Standar Pengukuran Ketebalan Konstruksi Lambung",
                "docs": [
                    {
                        "id": "petunjuk-pelaksanaan-standar-pengukuran-ketebalan-konstruksi-lambung-pt-1-vol-x-2019",
                        "label": "Petunjuk Pelaksanaan Standar Pengukuran Ketebalan Konstruksi Lambung ( Pt. 1, Vol.X ) 2019",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbEoxUTNkT2EzVXlVVmRRTVc1Vk0yVkVia00xUmxFOVBTSXNJblpoYkhWbElqb2lTSEF2TUhNMk0xZFJiVGh0VjFKR2JIbHdUMHhFT0V4Qk5XcGlhMWRuYTB3elRVODFPVmw2VUhKQlFuaDVZVlJCUVc1U1VVcGhZMVpoWVZoTE9TdEpPVVYxTVdrd2NubHRaVUowYmk5eU5ua3ZSME40VmxOck1UaEZLMlZoZW01MGRrbEZVa1l4U1NzclZuTXlkRFY1ZEV4TllrcHllRkp0UzBSb2F5dDFkVW93Y1ZZMVdIVXdVa3h3WmpoMFRuVjRSV1JWYTJscFVVMHJTM0oxT0RsYVNTdGpPVTh3WTBOUFpqUXhhalpzUVdWeU1tRjZjMDlvWXpkclJWa3daVlY0Wm5CNlJWUmFSa1p0ZGtScE56aERjMjEzY2psb1praGhjM1l4YzFKTE5FTjJOVEl6ZFhsblEzZ3pWR3B0Ums0NE9DdHpWWFl5YVdoSGMzRkJlbEJQTUhCR09WSnNNWEJLVlZSWWFURjFRbWRXV21kQ1kxUnZaVzlUWkdkYVIxWkpXVVJhV1N0S04wbEJkMmMzZDFkd1RYQkNNbHA2WkhwUFR6bHFTQ3RsVTNZaUxDSnRZV01pT2lKbE16aGxZV0UwTldOaFpqZzVNbUkzTTJGa1lUUmxPVEpqTmpnM1pXVmpOek16TlRaaVkyTTROVEl6WVdRNU5XUXlOMkk1TXpRNFkyVXhNekl4WXpVMklpd2lkR0ZuSWpvaUluMD0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "regulation-for-the-redundant-propulsion-and-steering-systems",
                "title": "Regulation for The Redundant Propulsion and Steering Systems",
                "docs": [
                    {
                        "id": "regulation-for-the-redundant-propulsion-and-steering-systems-pt-1-vol-xiii-2002",
                        "label": "Regulation for The Redundant Propulsion and Steering Systems ( Pt. 1, Vol.XIII ) 2002",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbXhwZURWWVNtdzVhM3BFU0doblRXcExXSE15Y21jOVBTSXNJblpoYkhWbElqb2lSMDlEWmpGclkxUTRieXRNVWxKSlZHcEtibHBsWmxJMFJTc3ZSR0owTTJobGRrSm5VV05CZDBGUGMyTlpia0ZoTW5ZeE4yc3JlRkY0Wm0xdVRWRXdPVlJoZGpnelFVaHdha0ZXWW1sS1IwbDJjV040YW1sUVlWSTBZbXB0UW5sNFlWTXpURVZ4TTFJNFp6UjVXVlJGVFhNeU5rNVZTemgwWkc4d1lWVnVVWGQwUkdsd1UyVk5kMHMyVVZwbFlVeE5VbGRFY0VKU1QwSjVhREozUW5GRVJXWlZiRTVOU2twWGFVeDNTMVZQZDNKcVRETjBUREF2Vlc1VVQyWlBjMmg0ZFU5eGJUZFhkMkpPWm1zd1RrZDJNM0pqWlU1TE9HSXpPVkZLVlROWVkwNVNVbVZEUVZSaE5VbHhUa0ptZHpnelpGTm1TR2g1T1c5c01VcHFiRXBRVVUxbmMza3pXVGcwVjJaeGRtSnNORWRYZUVvNFJuTm9ZVWxYYkNzNFoxSlZVa0oxVEdaUU5uSlllbU05SWl3aWJXRmpJam9pTWprNU1HVXpORE5rTUdZMVlURTJPR0V3TUdRelkyVmlOVE0wTURCa01XUmtNR0UzTlRaallqQXhOemRoTlRkaE1UYzROMkpsT0RKaVpETmxNMlkxTXlJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-approval-of-manufacturers-and-service-suppliers",
                "title": "Rules for Approval of Manufacturers and Service Suppliers",
                "docs": [
                    {
                        "id": "rules-for-approval-of-manufacturers-and-service-suppliers-pt-1-vol-xi-2025",
                        "label": "Rules for Approval of Manufacturers and Service Suppliers ( Pt. 1, Vol.XI ) Jul 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbll2UkRoc1ZERXhURWR2VGpsTFV6ZzBZa3AyY25jOVBTSXNJblpoYkhWbElqb2lXVGh1U0RsU00wdE5iMVZwTWl0V1dYSnZlbXgxYzBONVkxVmpTMmhPYTBwUk5IYzRaR0psTW1GUWMwWnRhV1V2Y1VsTU1IRktURmRqWldZM1prdzVNVGxCU1Vkb1pXVk5LMUZIUnpFMllUQlVlR1ZMYUZOQ2J6aDRjMjlHUm1JelFrZHZiRlF3YkdGU1praHdkMDFPVUN0d1kzWmtVVXBtVWtRM1kyNXhTRElyVGsxek9HOHljM0pFVEVwVGJuYzVTRnBTTlRWSmRHRlBkRFF6UW5GMWNuY3ZMMnRJUkRJcmNWUlROeXN6YVhKeVNtYzNUa0ZDTDJ0bFJsbHJXRkphV0ZCT1RYbGlTVGRtVHpKdlZqUkhZbGxZZDFwSVVFcGhZemhTUzJ0bFRGcHliMUpOV1dkMFQwVXZUMG8wVm5Oc1ZYRndSbFY2ZEhaTVNWbHVRV0ozWTJoNlNWcGhZM2R3Um1WNFdYRjNiaTlrZEM5YWFtYzlQU0lzSW0xaFl5STZJalUwWXpjNU16azBaRGxsTnpNeE9UZ3lORGN5WXpnNVl6WTJaVE0yTlRGbVlURmhZak0xWXpNMk1tTTVZalptTXpJeFpHRTNZalJtTUdRd01qTmpaVGdpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-automation",
                "title": "Rules for Automation",
                "docs": [
                    {
                        "id": "rules-for-automation-pt-1-vol-vii-2025",
                        "label": "Rules for Automation ( Pt. 1, Vol.VII ) Jan 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbVZWWVdGVlJUUXJkV1JKVWpWVmRXVTJXbTQ1UjBFOVBTSXNJblpoYkhWbElqb2lWV04wUTBSTlMyOTVSSFZDV1RaWlRUY3dLM2RIYkc5MWRtcG5lRk5NT0ZaTWJpOUhNbk5wWVUxaGVVeDRlbTUzWVZOVVNVOTFlVmc1WW5oa1RrZEhNbXBNV1dOd2FIVjVVVFF4V2t4UFl6aFZjRlUxY1VZeE5GSlZSVVYwVUZGaGJ6QnBjV3h4Y25NNE5FVlBaemd2U3pSRGVWbFBjVW80ZUhsTmMxTlVNa1pIY1ZZeFNYWm1RVFJSZHpGUFV6bFFOMU4wVVVKRVkxQXllVU5xWWxKMGN6ZDRUWEF3VkRndlNqaHVWRVJqY1ZOcVJteGhPVnBIWjA5TFdYcDZNekJzSWl3aWJXRmpJam9pTURrek5UazNaREUwT0RVeE16TTNaR05sTVRBNVlXUTBNR05pWmpSbE9EWmlaV1V6TXpnMU1ETXpNamcwT1ROaVlqSXlaalEyWldZM1pUQXlNems0TkNJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-classification-and-surveys",
                "title": "Rules for Classification and Surveys",
                "docs": [
                    {
                        "id": "rules-for-classification-and-surveys-pt-1-vol-i-2025",
                        "label": "Rules for Classification and Surveys ( Pt. 1, Vol.I ) Jul 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa2R3VldKRldpOXJZM1EwUTNkUWVrRkRTMlF4YjFFOVBTSXNJblpoYkhWbElqb2ljVlZLU2xoblJVOXZOakJXWkdWd01VNVBNemhFVTA1QksxQm9SM0JMVFU4NVRGWnBiakJKTTNGb1NFTklZVXhITVRWMFFWRmliM0JRVDBWcWJrUk9TbWhxVldoeU1WSk5aM3BhSzA5U2JVZEtaa05HT0RKaWMxSTNTMFZpWjJ4TmQwbG9iakpCVFhkUFMxbzBlVFVyYlc1T09USjBPQ3RWVjJwa1MydFNVM3BMWVZrNWEzRnFZVVp3V21WeU9IcDBla1oyVVVzd01YQlRXVzEyWjNabmRGUkhWblFyWTJoU2NVazRPR05qVVhCT01YQnpiWEJMTDJGc1FTOUxZVW9yZFROV1VHbGhjMDFMVDB0S1RXZGtWMFJNVG05RFFUMDlJaXdpYldGaklqb2laV1l5T1RVeE4yTTNZVFkzTnpJNU5USXlOemd4T0RVMFlqbG1NV0UyWkRjNU56azVObU5rTmpObVpqWTRZbUUxWmpNMlpUZ3hOakJqWWpGbFkySTNOQ0lzSW5SaFp5STZJaUo5&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-classification-and-surveys-id",
                "title": "Rules for Classification and Surveys (ID)",
                "docs": [
                    {
                        "id": "rules-for-classification-and-surveys-id-pt-1-vol-i-2022",
                        "label": "Rules for Classification and Surveys (ID) ( Pt. 1, Vol.I ) 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJaTlHUlVoRVdEQlBUREI0UjNWRVEyOTNaVlpNTmtFOVBTSXNJblpoYkhWbElqb2laM2RZTldZeFZXNXBSRnBuZDFreFNrSTBjMGhGYURaM1VVZFRXamgxVEdWRlpUWXhZV3czVm10cVUyNURiRmhSVW5VeGNUWTVRVXhPTjA1blZXUlVMMGxUYjA5dmVuZE9PRWhDVkcxTFlVUmxUR056ZGxGWlRVNVBMM3BsVFc1aE0wRlhhVEZwYUhaRVpUSkZWbVpTU1c5b1NsWnJXbTVrVVZsalVqSnZkRk5SUzIweVlYWlJOVXd2V0RCUU5ubHVUVTkxTjNnM00zSlNhRVEzV0VWMlJVNXdkSEJ0YzB3clNVNWllRVpFU0hSM1pXZ3laMjF3VTIxQmQxZFFaVWd3TVhORWVWTkhVblpET0dkWUwwaG9jRWswWWtKNmR6MDlJaXdpYldGaklqb2laRFV3WlRVNU1HWTFNRFkzWkRFek56STRPREk0TW1Rek5XRXlaV1l5WVRSbE5EWXlORE5qWm1Zd1lqSXhNbUUyWkdaa09HWmlPR1F5TlRObE56SmxOaUlzSW5SaFp5STZJaUo5&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-container-ships",
                "title": "Rules for Container Ships",
                "docs": [
                    {
                        "id": "rules-for-container-ships-pt-1-vol-xviii-2025",
                        "label": "Rules for Container Ships ( Pt. 1, Vol.XVIII ) Jul 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbWhGZERKWU1TOVJhV1JOTkdnM1l6QnlXbkJFY1djOVBTSXNJblpoYkhWbElqb2laVUp3ZWtGWVlUTkVaVzlMUm1sNGVFMVpjRVZwWmtnclZIRnBWRlYyZUZaWlREWjVPR0pwUkhNMmFWZzVibWRzVDFGNk56RjJSa0Z6YkdwMU9XZ3ZVbVI0Wm1wTVYyTmtWVlZyU2psVVIwUTJSVmRXU0N0RmJWUnhOa0ZXY1RodVVEazNWM1pUTW1OaFF6VkdjSGhzTXpGelRVSkpUekZWZFVOcGVtUmhaVkJ4WTBaMVpXZE9RbUZhWVhWT1kwRndNV2cyUVZNd2NrMTJUWEJpY0hONUwweEhabGxNU1VaNmNXMWtkMFpLZEdzemVHa3hiMDVtTmtzM1ozbEZOaTk1SWl3aWJXRmpJam9pWlRkak4yWTBORE5oTURneVpETXdNVFV6T0RnNE1UWTNZV1F6TXpJME1tSmxNREkwWmpBNFptSmhOV1kwWldNNE56SmhPV0l6WW1VNFpqSmxZVFZpTmlJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-electrical-installations",
                "title": "Rules for Electrical Installations",
                "docs": [
                    {
                        "id": "rules-for-electrical-installations-pt-1-vol-iv-2025",
                        "label": "Rules for Electrical Installations ( Pt. 1, Vol.IV ) Jul 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbkJWUW1jeE0zZDFXRTV6ZVZsWVptOHhSemx3WTJjOVBTSXNJblpoYkhWbElqb2lkRk5KU0dsNk1IZE1ZbGQ0YkN0TlptdE5WRUkzYTBkSFpWSkRRV1l6SzBZNVpEaEpNblJGTjJoaVRuaGlkbXhZY1hwRU9GRjBibXBMZVcxdWJIcGhUekp0YUU1eVVtSlZOM0Z4WVVGeGVDOTNhMll2VWtkMVJrVktNSGsyYkdsdGFFZFBNSFZ3UzFNMlowUmxNVWRIUzBKSFZISjBiM1pqZUM5MGVGcFdlSFIyUTA0d1dWbHlZVGswVTBZeVJYWldVME40Yld4aWVHMVpjWFpGZWtGYWJVZFVRMVIxTkhsTVZHcHhja3R1WmtkS1ZWSkRMM2tyY1hwdFUweDRORWcwTnpCdmNHWlFOV2xxTW5aNFRtYzVXa1p5Tmk5VGR6MDlJaXdpYldGaklqb2lZVFF6WmpNd01ERTRPVEprTnpVME16TXdOV0kxWkRCbU1XVmlZbVpsTkRWaE5HSmlaR0k0T1RCaU1ETmxZVFkxTjJOallqUmpNVE16Tldaa01UTXlaaUlzSW5SaFp5STZJaUo5&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-fishing-vessels",
                "title": "Rules for Fishing Vessels",
                "docs": [
                    {
                        "id": "rules-for-fishing-vessels-pt-1-vol-xii-2003",
                        "label": "Rules for Fishing Vessels ( Pt. 1, Vol.XII ) 2003",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJazlyUjJSQ1RUUlZTeXRMYVRkRVIyeHRiMFZGTVdjOVBTSXNJblpoYkhWbElqb2lZbkl5U2xoR1ZVSk5UVWt5SzJSb1VpdHJUbVV3YVhwMFJFUlRkSGcwYkd0RFFrcFRRa2hCTmpaaVVEbFBjWGxyU0ZGYWVVeFFTMjFDZHpkdFdURlNNM056Y3lzeVVpOTFhM2d6TlRSa2FVdzRjVWhZUjFGMU16QXJOVGx3V0hWd01reDZNMFZUVFU1VWVIcEZlVzlhTWxWWVZsQTRlRkpyWTJWYWNHSmllRzFPYVVOT2FtNUhSM1pyZG1RMlNuRTNhVEpDZDJ4VWRsbHFUazh2UW5wdFpHeGpSVTR5TDJ0SGFFRklWa0ZzY1VocFdVZHlTMHd5T1hZekswMXBZbE5qSWl3aWJXRmpJam9pWWpReFpXRXlZalF4TmpFMU1EVTVNMkpqWmpFNFpHSTNPR1ZrT1RJeE56azBZelZoT0RNMlltTmxaalJpWVdOall6WmtZV1l3WkRVeU0yVTROVGt5T0NJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-hull",
                "title": "Rules for Hull",
                "docs": [
                    {
                        "id": "rules-for-hull-pt-1-vol-ii-2025",
                        "label": "Rules for Hull ( Pt. 1, Vol.II ) Jul 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbEYwUms5NWVrRmliVlJDVlRkRFJEbGxSa3QxTDFFOVBTSXNJblpoYkhWbElqb2lkRzVxZGswcmFrcElSa3BSWjBRdmFrMU5ZV2Q0YkVwQ1RHZFNUMUpCWkZKSlQzUXZVR1JOYzJkeE5uZElkVlpSYTJVMWJtbERVWGszUnpOUGMyNDVRVVEwV1RCeVdDOHhUVkpTTDNSRGFtWktiVU5wTHpCeU1tMUZRazFPV2tndmVHZzRkMGg0VUZNMVdtWnhlWGczWnk5SFVIb3hMelJ2UW1Sa01rUnhSa3BMWm1sQlpqVmxTSE14TTFneGNFdFBWRGx0TkZGd2JWaElTRTVqTDFwR1RrZFpTbHBIZUVSamQzQXdQU0lzSW0xaFl5STZJalF3Wm1Nell6ZzVNREF5WWpCak1qa3hNRE0wTm1VMVlUTmlOVGN3TkRBMlpXRmtOek13T1RjME1EbGlaR1ZpWTJReVpXWmlPV1JqTURkaU1EY3lNalVpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-hull-id",
                "title": "Rules for Hull (ID)",
                "docs": [
                    {
                        "id": "rules-for-hull-id-pt-1-vol-ii-2022",
                        "label": "Rules for Hull (ID) ( Pt. 1, Vol.II ) 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbWhSVEd3M09IRnhkREpMUWpRclRrZFliWEZUTTFFOVBTSXNJblpoYkhWbElqb2lWM2N4Y25VeVZIWmtSWEZIY2paNlZWaEVlVXBZZUhWSFYxQlJOSEkwU200eVVYQXllWFpoY0dkRk1HVkVOelEwYzNOdk9FUjVPR2wzUzJ0NU5HVjBjSFI0TmpCYWVUTkNaeTl1WW5kb1FXMHhibXRKTm1oTGEzVXlXVk5VZURaUlFuSjJlWFJ5Wm1rNVZtNVdjMDlXT0RCTGFsRlljbVJhVjJSc1VXaEtTQzh5Y1hCdlYwbHFTemxKWXpsR1VUUnNObGhpYWxKaGJrbEJkRkYyYlRCa1NWSnFWR0pPT0ZBNWVVeEZQU0lzSW0xaFl5STZJbVJrTURjNVpUazFNVGhoWVRjek4yWmxZakkyTm1FelpqSTJaV1kxTlRNek0ySTVOMk5sWWpZM1ptVTVaREl4TXpsbE5UUXdPV1l4WVRrME9EUmtPV1VpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-machinery-installations",
                "title": "Rules for Machinery Installations",
                "docs": [
                    {
                        "id": "rules-for-machinery-installations-pt-1-vol-iii-2025",
                        "label": "Rules for Machinery Installations ( Pt. 1, Vol.III ) Jul 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbk5oYlRSVVFuRnNMMVJMUXpWVmFWZzJVSEo2UW1jOVBTSXNJblpoYkhWbElqb2laMGd3VWpoRVkyUXZOVGhpYmtwSWRGWm5ibXRTVmpSVVpXUnBVREFyWjJ4cGRFMWhaR2xJUjFvMlJETXlVbGt3ZG1wek5VSk9jR0paYWpjclJGa3ZialowVjJoVmMxTllNbkJWY1ZZd2FFNHpUakF4WXpSc1IzQnJSbkZ6ZFhoMmIxVktkMlJ2Y0VKcVdtaHZOVVpOWnpOcGFVbzFTRVpCWlUxNFpHNWhWRXAyTldaSldGVTVRWFJKZFRnMk5FZFpiM3B3TVdwVU1GaG9NM0JtVWtGaFRYWTFhRUUzVjB0QlpVTTBXV2t2T0V4bmVuaDZha2RCYld4d1VtRlJkbloyU20xa1owSm1VSGRhVGtOdFdWaExRa2RZZW5wYVFUMDlJaXdpYldGaklqb2lOV1psTW1NeU1qSTROemt5Tm1ZeFpqWmlaRFJtWlRZM1ptRXdNMlptWmpCaU1tTmtZbVV5TWpCalpqUXlaalJoWkRabFlXVTVZV1pqTURreVlqVmpaU0lzSW5SaFp5STZJaUo5&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-machinery-installations-id",
                "title": "Rules for Machinery Installations (ID)",
                "docs": [
                    {
                        "id": "rules-for-machinery-installations-id-pt-1-vol-iii-2022",
                        "label": "Rules for Machinery Installations (ID) ( Pt. 1, Vol.III ) 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbTFNWnpCd1QxWnlWazlsU1hwM2MzRXJLemRMY2xFOVBTSXNJblpoYkhWbElqb2lXa2xCVkVWWGN6bHVlV3RxZDBwaE5rdEJXakZIZVZSb1VsRmxRbEJXTVVaeFRrb3JNV3hWUjNOSVRIVTJlRXBUTUN0TWFESjFjVWxpWmtscFJGVkVOVVJoWTBobFdHRjJLekJPVGtOdWJXa3piVXhCVWxsaU5FVXJWbXRFTDJSVk1EbEpOWFY2YnpkaFJWcG5lSFl5VUdKUlpHSjNjbVkxVDBFMVQxSnNibVpyYlVoRWEyOVVTaXRVTldZMFp6TjROM0pLYVc1SGIzbFFValJsYkV4YVpqTkdZMlpyTWtkcWRETjBNRlU1UmxVeWIwOXZlaTlDU0VWeWNuTm5WbGhRUzFoSmJqQk1kbmRJYkhORGQzZG5Nemx4VDJ4MVFUMDlJaXdpYldGaklqb2lOekl3TkRkbVlUQmxNR0ZoTXpFM09XTXhNVFptTkRBeFpHSmpZbUUwT0RFNU9HWTRNemMyWVdJMk16RXpNbVpoTm1Rd1pUZzRabVpoTjJFek5XUTJOU0lzSW5SaFp5STZJaUo5&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-materials",
                "title": "Rules for Materials",
                "docs": [
                    {
                        "id": "rules-for-materials-pt-1-vol-v-2025",
                        "label": "Rules for Materials ( Pt. 1, Vol.V ) Jan 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJamROVDA1TldrRTJUbXBOUjJGclQyOWxabFV5V0djOVBTSXNJblpoYkhWbElqb2lWbWxFYTNGWFRFaFVibmhMU0d0UU1XOU1RamhPYzNkTFJIYzNlVmRhVEZBek1qazRiMEozV0VGemIwSlRlbkl3VmpkdksxSnFOVFJxTURONWFVTjBPR0ZvY21aU1IxSm1ibUptWkdKVE4wYzJhamRNUVZkTUswZ3dMMDlJVEVaUmNGVjJZMnRVWVZKRllrazBOMmswT0d4U1psTldRelUyZVZOVFp6bDBUMFYzYjJnNVRYZHhabXcyUjBSR1VrWkVkMHBsUjNac05tNTNaVEk1YXpOU2RreHhjSFF3Y2tRdlRYSkZQU0lzSW0xaFl5STZJamxoTVdGaU5XWTVZV1F4WW1NeVpETTBZVFl5TVRoaU1qZzJOekF4TlRGbE16SmtZVEppTURCbU5tUTVPR1l6TXpRME5UWXhNVE0wWXpSaE1qVXlOakVpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-non-metalic-materials",
                "title": "Rules for Non - Metalic Materials",
                "docs": [
                    {
                        "id": "rules-for-non-metalic-materials-pt-1-vol-xiv-2025",
                        "label": "Rules for Non - Metalic Materials ( Pt. 1, Vol.XIV ) Jul 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbFJGV1ZaNVkwUnBVVU5HVlZWc2FuZHNXbkJ6T1hjOVBTSXNJblpoYkhWbElqb2lSSFowWVhSRVZGQmxXU3RNTUdNNU56Qk9TMUppTUUxMVVGQkRUVlJtU2pnMmRrSklNVXBzYUVZcldFeEVPR0V3VlRKbGR6TlNMMWxTVVZOcGJFaE5iMjF0TDFwYWExQldiMHQyTmpnNVUxZHJLMEZHVkhjMFdHUnRSRWRsY0U5WVpYazRSR3RVVjJ0cVJISXdaakEyVjB4bU9ERnNVMDF0YVNzd0wyVkZaM0pOZERWMUsxazRNMFJ0WjB0RFlTdHNSWE41Tm5wS1VUQmljaXR0WjJocFJVbzNjMHBvVWt4Vk1rRXdXVFZhVUcxeVJHNUxXbFpMVTJwSmNVeE9LMk4xTTNjMWF5czBNbVJMY2k5MVYxUXlZamxEVFVFcmR6MDlJaXdpYldGaklqb2laamc1TTJWaU9HRXhNakppTVRJeE0yRmlOMlJtT0RrMVpESTJaVGhpTXpVMllXVTVNR1ptTnpneFlUbGlZMlF6TXpnd056RTNZamN6Tm1RMk1HSm1NaUlzSW5SaFp5STZJaUo5&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-refrigerating-installation",
                "title": "Rules for Refrigerating Installation",
                "docs": [
                    {
                        "id": "rules-for-refrigerating-installation-pt-1-vol-viii-2018",
                        "label": "Rules for Refrigerating Installation ( Pt. 1, Vol.VIII ) Apr 2018",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbGhTU0hKQ2VtNWlLM2hsV1V0TWFEazBXRGxxTVhjOVBTSXNJblpoYkhWbElqb2liMWRxU1UxRFRXNDFVVzV4WlcweGVHeE1Sa1IzVmpoNGIycFRaMjVET1ZOWWNGZDVRMWs0VUVGelJqWktXWHAwV2psamRqbEhielJ4Wkd4ell6ZzRkbEp1YkZCT05FazRkMHBhZERWeFRVRktVVUZLUW5aWFUxSldUMnd6UlRGck1WRlBZMGxHUWpkTGMyMDVVVk5QVTI1emRFeFJPVzlsZGxoSk4wTnZjbXRPYldsaldqUklRM2d2Ym01MGNFVXlSMGMxVlhsWGRFVnRNRW8xTVhOMWEyaHdiV2sxZW1KTUwycG9OVTluVm5GQ2F6Tk5aV2R5Y0VZd1JIVXdjMmxEVlVkME9HMDVka3BrV1VSQk9HNU1iVlZpU2l0cVVUMDlJaXdpYldGaklqb2lOekJrWkRnME1HRmxPVFptWXpVeE5XTTRNek15WlRRd1ptWTJNMkl3TmpnM09HTXhOekprTXpVeU5qUXhPVGc0T0RFelpETXpNVEZqT0RZNE1EZ3dNaUlzSW5SaFp5STZJaUo5&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-ships-carrying-dangerous-chemicals-in-bulk",
                "title": "Rules for Ships Carrying Dangerous Chemicals in Bulk",
                "docs": [
                    {
                        "id": "rules-for-ships-carrying-dangerous-chemicals-in-bulk-pt-1-vol-x-2023",
                        "label": "Rules for Ships Carrying Dangerous Chemicals in Bulk ( Pt. 1, Vol.X ) Jul 2023",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJak41WkdWQ2FYRjBiVlpuZDJVMlZHSTFUWE5qTjJjOVBTSXNJblpoYkhWbElqb2lNRkZKV1VwclkzcFBiMlZOZEdKVlZtSnVPVGMyWWpGblNtTTVTMWRhZUZoUlMzTkZZbEk1U1RGc1FuWnpUVzkwTmtWdVkzUTVhMkZITVROUFduSkNkREZ1TDBadloyZzFlR1JOUmtwWFNWTjZTbGRVYmxoNmRVaFlkMWRrU21GVlQwMXNNR3hhUVhwYVZVNXRWV1ZFVTFWNkwwbDJUMDlsTUhaV1MyVnhhVFZoVjA1ME9WWnZTbG9yYUdaTll6YzFlV1JxUW14alNUWmtjblZaTURNNFZHOUVOVGhoVDBjMmVpOU5RV0pIVjBkTFRVbDJTVTVvVWpOb1RsRnpSbXRyZWpsRFNXcENSR0pqTkRJM2VIZFVWbGRFYmxSSWFHVlRaR2d3YkV0dFEzWlpXakpCYVRkbWQwNU5XRVpwU0VSMVpFVnZWVEpZY0VscVNXdzJUMlZ4TVNJc0ltMWhZeUk2SWpSbFltVXpZamd5WVRGak5HTTNZbUUzTldNMFpqYzNNbUU1TUdReE9ESXlPVE0wTURrMU5qUmpPVEEwT0RNelkyWTVNbVE0TW1Wak9UWXpOell6TUdFaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-ships-carrying-liquefied-gases-in-bulk",
                "title": "Rules for Ships Carrying Liquefied Gases in Bulk",
                "docs": [
                    {
                        "id": "rules-for-ships-carrying-liquefied-gases-in-bulk-pt-1-vol-ix-2022",
                        "label": "Rules for Ships Carrying Liquefied Gases in Bulk ( Pt. 1, Vol.IX ) 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa2RrVVVOdFkzUkhaRlZrV20wek1GUkhlRFUxTDFFOVBTSXNJblpoYkhWbElqb2lWVlE1YmtaVlEweFpjbkpYTmxBd2IwUktWVXhwUmtwUWJuWjNXVU5hUkhGSWNsaFBTSGt5V2tGdUsyaG9MMGh3ZUhGdGVVSjFSblY1VEdOM0swOVNOMFZsUlRkcGVuWTBXbm96S3paWWNGaG1Sa1J0Y2pkV1ltcHlaVkIyVkZBeVVYQTBMM0pUWWprMVJHWjFZMDk0TjNCdVIzSm9kRFJyUjFoeFZUVkpkRUV3ZG5CVU1WVlRlRlJpZUVkS2FYWXhiVmRTYVZwRFYwaHpiRVZpZFVoMk5HNVFlVU40V2paTlRuQXZVblZVWmpkMVJIZG1WWEZ5TWxBelEweFBRa3BPU0U1YU1XWTNjVFZFTlZWSGRYZzFkMVp6ZVRKUmNEaHZOREV4VlVJNE5UaG1halEwWnpSemVpOUliR1U1TVU5aFMwWkZTMmRoUTNCbFdXUkxReTlHU1NJc0ltMWhZeUk2SWpJNU5ETmpOVGxsTURjME5UQXpaamRqTWpOaVltWmpOR0pqWlRRNU56VmhOak5rT0dNelltRmpZMlZqWlRKbE9UWTRNVFZqTTJGbE1tVXlZamhsTWpFaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-welding",
                "title": "Rules for Welding",
                "docs": [
                    {
                        "id": "rules-for-welding-pt-1-vol-vi-2024",
                        "label": "Rules for Welding ( Pt. 1, Vol.VI ) Jan 2024",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbmRxVVRSMGIxZFJOR3A2WkVnMlNDOTVlVE41UW1jOVBTSXNJblpoYkhWbElqb2lNVkpsWVRFclFrMUNSVWhhWTFCRlFrMUpkbHBaY0ZaM1JsRk1PVzB3UTFKWVlVVjNiVXQxY2xkS1lrSXJRVFZaUTNFemNsRnpXRUpKVjBweUt6ZGlRMFZSYWpaR2F6Z3paWE5EZVRCeU0waGhTMmxMV1UxblV5dEZTVTlPT0dOdVVXVndaMnA2VW1KbGIwMVFLMGd4U0dKaVlUZHlkMmhOVkhKNEsyaHBWMWMyWlZoQmRtdGpUVUl3VlhsaWEyb3dZbE4zTDB3NVkwOURSa1oxWjNKM1kySjBSVVpVV0UwMmNURm5QU0lzSW0xaFl5STZJamd3WVdRelpHRmxaR1psWVROaU5XRm1ZV013WkRJNE9ERmtaVGMzTWpFd01EWXlZMlUwTlRZM1ptWmlNak14WWpObVlUUTFOR0ptWTJSaU9UUTNNamNpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-welding-id",
                "title": "Rules for Welding (ID)",
                "docs": [
                    {
                        "id": "rules-for-welding-id-pt-1-vol-vi-2022",
                        "label": "Rules for Welding (ID) ( Pt. 1, Vol.VI ) 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbmR4YTJGQmNEZ3ljVVp2Ulc5YWFFTkVRa3N5U0VFOVBTSXNJblpoYkhWbElqb2laU3RLWm1Zd0wycE9RWFozUW1SaEsxazBjVUV3TlZkMU5VRXlNRU5rTkZod1dUUjVObGt2U2tKT1QxUXZOVUV2UzBwRGNEVTFNazlyUVdKTE1EVjZZbE5oTUZOVk0zaDFaMWh1Y1UxMU1GcHRiR3BGVG5SdU1EbEVORzkzVG14TWVuazVlazR5VUhFelpqZEtZM2h4VkN0YVp6SldMMVJpZFZkalYwWXhXbVUyYUdaRE9TOXdUVXBsYTFVNWRVVnBhRzVWTDJOVFNUTnBaeTlSZUc1UFpIWkJSSEZXUkhsaU4zQnpQU0lzSW0xaFl5STZJalUyTmpOak56STRNalZpTm1JeE4yRTVZek16T1RkbU5ETmlZVEZtWlRaa1lXUmpORFpsTVRNNE0yRmhORFF3T0RabU5XRmhNVFV4WXpoaE1UTmlNMklpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            }
        ]
    },
    {
        "id": "part-2",
        "title": "Part 2. Inland Waterway",
        "groups": [
            {
                "id": "rules-for-inland-waterway-additional-requirements-of-notations",
                "title": "Rules for Inland Waterway Additional Requirements of Notations",
                "docs": [
                    {
                        "id": "rules-for-inland-waterway-additional-requirements-of-notations-pt-2-vol-v-2015",
                        "label": "Rules for Inland Waterway Additional Requirements of Notations ( Pt. 2, Vol.V ) Jul 2015",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbVpvVjNvelNIUjBTV3BtYWtsVFMwNVZaM2xvWkVFOVBTSXNJblpoYkhWbElqb2lia3BFUWsxWlQzaGhjRVp1VlZrNGMydFlZVlJ1UzNkT2NFbElMMFJCVURRd2IweE1XQ3MwVTNOb2QxbHlZVXB1TmtaeE9FaEdRbWw2VVhSdVJUaFplUzlCTVd4U1QwdDZaV0l5UzJGNlRIbE1VM0kwWWtONldDdEhVR1ZHUm01SFZqTmhaV2hPVkhoT2NXWjVOV2c0U2podlIydE5Wa2xUT1RCak1VNXhhRWxzVEVwb2RWbEtVbWRNVlhadlNrd3ZXbmRaU25kdWQxTjJWSGxsYVdkNWJETmpZazFaWldkVGRYVndkelZZTmtsMlUwRnlWWFUwVFc1WFlTdFVaazV0YnpWaFlsUkNSMFUwY1VOVVFuaGFWWFpXUWtKUVMwMUtlWE5MTkhBellqTjBSaTlWTlhselRUUTFXVGhOTHpKTVdFODVOR1JEVTJkb0swNXVSVXRyU2t0b2RrZ3JSbTgyYUROS09HVlZOM2cyTlZCdWFVUnplalZNVERaNmFqSmFVbHBwYlU5WmRraHZiRUU5SWl3aWJXRmpJam9pTTJJek9HVmhPR1JoWWpoaU5USmxaRFZtTlRJeE0yUmxNalE0WXpZNFl6RTVZVGsyTlRVNU1EUTBNV1JqTWpaa05qWmpPR1UxTjJKalltTm1aVFJrT0NJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-inland-waterway-classification-and-surveys",
                "title": "Rules for Inland Waterway Classification and Surveys",
                "docs": [
                    {
                        "id": "rules-for-inland-waterway-classification-and-surveys-pt-2-vol-i-2015",
                        "label": "Rules for Inland Waterway Classification and Surveys ( Pt. 2, Vol.I ) Jul 2015",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbWRrVUVKSlZWcExVak5DWTJzeWNXRjFVbVUwWVVFOVBTSXNJblpoYkhWbElqb2lRWEpqVnl0S2VuVm9kell2UVRoSVdHZGxUemN3TlVSRmNVazNaVzlDYm5saWNVOTJNbEZLVFZaV1MyaHlNRXRIUWxsT1kwTk5UREJqVm5OWWR6ZzJjRFV3VEdRNU1qTmxNekU0VlhKSFlVTkRLMkZ2YkhKWFZ6bGhlWEV2YjB0bVQxQnZMMWMwVkU1MVYwOTZPRmM0WlZCcFoydHhWRTB2YjA1a1JsRlRUbFZtUzNkR1pWTnNXWEZUY0ZOVU1HNVdkekJYV1ZKUVVsSlhha1ZaWXpOdGQwVXlkMDFoZWpad1ltaEdVVWxrU1RncmFsbGhTRFUzYjJGWlRsSnhVMFp6Wm1oYVIyazNRelJMWldrNU1tVmFZa1ZXS3pKQ00ycHRTM1JvVDFWQ05pdGhNbEpHT0ZKdmRsRmhUa1JYTjFoRWVucE1WVmd6TW1oVVQwNTRZVXRCWTNZclozTTFZbkJNZHpnclJXRnZRVmxsV1RneVJsRTlQU0lzSW0xaFl5STZJamswT0RNM09XRmxOVFl3WW1GbU5qWXlaREUzWkdVeVlqUTNOV1UzTmpZNU16WXhZMkZtWWpneVpqRmlNemczWldRME1qUXhNalF6WmpNd09UUTRZakVpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-inland-waterway-vessels-electrical-installation",
                "title": "Rules for Inland Waterway Vessels-Electrical Installation",
                "docs": [
                    {
                        "id": "rules-for-inland-waterway-vessels-electrical-installation-pt-2-vol-iv-2015",
                        "label": "Rules for Inland Waterway Vessels-Electrical Installation ( Pt. 2, Vol.IV ) Jul 2015",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJaXRKTlRRellsRlhjRlJKVm1ONFFrbE9aMWxaUWtFOVBTSXNJblpoYkhWbElqb2lRVnBOVjFWcWNXUlFSemxSZFU5eE1tUXhOMkZUWWk5RU9HSnRObmxFYkRSUmNrSkVMMFptTm5JM00zbHlkbk5zUkROb1pVbHZlVVl5YVVKbWR6TkdUa3c0WkdWRFNXbFVkM1ZCSzFoNUsyVjZUbnBOYlc1clJXVXhiVWxUYjFOWWFFSTRRMWRqZVdOQ1pXcFFSVGhTTDJwRE5YZ3lUemxXZVVSSFpXWnlkVEpPUjBGRFExazRUVFIyTmxab2VreHpVVWRZU2xkVk5tUnBVWFk1T1hKNmEyOTVNazlFWmpjelNXVkhWazVxZUROR1N5OWhkemczVG01RFNYcExSbWRDYUVKRmJrWjRjVGR6T0hoVFJFZFlkaTluTVVkelpXOHlWVzVrVW1OeGJVd3hObEZ3TlN0T2FXMTZUM1JXWXl0QmFXSXdZMnB0YUUxWVpXNVlkMHB4VjJKcUszTndjazl4Uldsa2RrbFViaXM1V2xoNVpFRTlQU0lzSW0xaFl5STZJamxsWkdNM05XWTBPR1kxTTJNd1lUSTJaVGd6WXpFME5qZzNNalExWW1RMk1EUXlNR0UxT0dJeFpXWXlPRGxrTTJFMFpEWTFZVGt6WVdZM1pUZzFNalFpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-inland-waterway-vessels-hull-construction",
                "title": "Rules for Inland Waterway Vessels-Hull Construction",
                "docs": [
                    {
                        "id": "rules-for-inland-waterway-vessels-hull-construction-pt-2-vol-ii-2015",
                        "label": "Rules for Inland Waterway Vessels-Hull Construction ( Pt. 2, Vol.II ) Jul 2015",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbWtyYzBoRFRETnBRMmgzYkVFclNIWnNRMXA2V1VFOVBTSXNJblpoYkhWbElqb2lkazVVTVhaeWFYb3ZMMGRTYjJWVVJFODNiVWRuU0c4d1dXVnNlRnBVSzBReVZIRTFkbEpsZUdScFVIbDRaWFpPTDJ0M2NXRTVjbTFvWW0xMmNIRjZVWHB1V0RWaU1tNWlSSHBaS3pGa056TTVZMng1Wmt4eFluSkhkbk16TlZGNVpVaGxlVXRtWm1oWmJ6TjZOMkZ2Vldnd2RIWjBaR1E1UzAxQ1pHODBZMjl6U0VkU1MzcExOSGN4VG1aS2FrbEpaVGg2TmpOM1EyZGFabmRMTWxNdk0wZ3dTM05xVlRKRWRrcGpWV1kyVXpOUU1tbGxUMUJyV0VJMWRFVlpTbHB6UzJOV1UxZFNiVzFCZWtsdVRqa3dlazVST1dWSFNVOXlPSHAwZEZab01YWXpNa1ZoTDNCNFZXODBOVVp1VFV0NWVrdEJNRXhsYUhWWVZIRkpTVVJRVlNJc0ltMWhZeUk2SW1NMU4yTTNNVFl4WldFMU1XWmlZamxoWkdSaFlXWTVabVZoT1RWbE5tUTNOV0l5WVdZd056STRZVE01TkRBd09UVTFPR1EwWVdabE16ZGtaRFV4Wm1VaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-inland-waterway-vessels-machinery-installation",
                "title": "Rules for Inland Waterway Vessels-Machinery Installation",
                "docs": [
                    {
                        "id": "rules-for-inland-waterway-vessels-machinery-installation-pt-2-vol-iii-2015",
                        "label": "Rules for Inland Waterway Vessels-Machinery Installation ( Pt. 2, Vol.III ) Jul 2015",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbXBoYUVoRFRHWlBLMDUzSzA4eldXb3Zaa050ZEZFOVBTSXNJblpoYkhWbElqb2lRMmxaWjFSVVIySlFhMVp2TWxZd2JrbDBPVFZPU0RWRWRXSm9jbVpTWjFseFpIcDZTMFY1VTNwalZGTm5aUzlWUW1kdVdYUkNOMXBxWTJOMVNHOTZiRE12WkcwMVpGcFNLeXQ1TW5WeU1EZ3ZURkJRVkZWQ2JXZGpWbmRVUW5Ca1dVODBkbWhGY214SVptUjZWRGt2VVdWclJ5OWxXV05yUkcxNmRYRkNVbVUyWjNJck1HWkliblZrWWpNNFZYSkZZV3N5Vmt3eWJDODRhRzFrVUVodVNFdDZTRGxMWlVOeVoybDNjMWd3ZVRRcmF5ODVhM1k0YVhCVmVtYzRLMnhVSzFGTGExRjRUWE5UTlRBM1YwZGFjRGhUYTBGdU4xa3daMlJsTTNGRWRsQmlVMmd5Y0dSamVtbDNkRXRrVkVSNk1WVlFXV1ZrVUdKR2FuSXhlVmsyV204M1RuWkpSSGxxVW1kNWVYVndXVEZrZDB4UVlYYzlQU0lzSW0xaFl5STZJbVF5TWpJeE5HSTNaREU1TTJKalpqTXpaV1ZsWldJeVl6ZGpNV1JsTlRCaE1qZGxabVF6TkdGbE16RTNNR016TnpRd09UZGtZakpqWWpaaVpXSmtZallpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            }
        ]
    },
    {
        "id": "part-3",
        "title": "Part 3. Special Ships",
        "groups": [
            {
                "id": "amendment-rules-for-high-speed-craft",
                "title": "Amendment Rules for High Speed Craft",
                "docs": [
                    {
                        "id": "amendment-rules-for-high-speed-craft-pt-3-vol-iii-2023-jul",
                        "label": "Amendment Rules for High Speed Craft ( Pt. 3, Vol.III ), Jul 2023",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbFI2ZDBwcU5HSklhV0oyTVN0eGJsSm9kMlZYYVZFOVBTSXNJblpoYkhWbElqb2lSSEU1YzA1dmNWaFZSR2gyYnpGWmRVeFZjMFIwTkcxcGRWUlJWQzlUVGtOa1ozSjNRWFJNTVhwblREbEdSblJHYm1GcVNtTTFXak40U1VzeGRGbElaQ0lzSW0xaFl5STZJakF4WkdFNE56UmxPRGcwTkRabVlqVmxNVGRqT1RVNU16RmlaalEwTkdSbE16UmpOREUyTkRCaE16Vm1ORE15T1dFM09URXhabVpoWldNelpqVm1NV0lpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-certification-of-frp-fishing-vessel-less-than-12-m",
                "title": "Guidance for Certification of FRP Fishing Vessel less than 12 m",
                "docs": [
                    {
                        "id": "guidance-for-certification-of-frp-fishing-vessel-less-than-12-m-pt-3-vol-b-2020",
                        "label": "Guidance for Certification of FRP Fishing Vessel less than 12 m ( Pt. 3, Vol.B ) Mar 2020",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbTVMZDJaRWVTdDNNWEJFZWpaU1RqUlpXR2swUjFFOVBTSXNJblpoYkhWbElqb2lSMnhPUXk5NmF6bElaMHczV2tkT2NVVnBNV2htUlUxbFdFaDJTMEYxTUZoek5FOU5WMVlyVmxjMk1tODNiemRvWWtwVGRtaFViMUJGTUZwWlNuQkNZM05NU1cwMVRrZzVaVVl4TDA5RGNERjZLMU5QZGxselNHVklRVTF2VFZsdWJGY3lUbk5FV1cxMVprbE1RMjFEYkU5c1VtVnBOVlp1VkVsSlJHVlhXakZTWVRVeldubDVaa3BrWTBKNWFHbEpTbEo0WkZsb1RtTnhWV3BLWlRKSlNEZERSMjl1VDNkeU5YaG9aaTgyT1RScUswWkhkaTlxZWxWMVZsbFJlREl4Ym14VVZrTmxWR2hSUjBRdk1FczFNakZ6VTFRdlRHVlJiWE56T0VwRFlrSkhUa0pRYTNaMGJqUXhhRWRWVjJGa1FrY3hSVTlWUXpkT05pczNVRkZNWW1GalpUWXhTVzVQSzJwclQxVldWME52Y1djeFNYVlJjMmRuYlRSS1RsTk9lVFZEVDBWeU9HOU9aV3M5SWl3aWJXRmpJam9pTVdJd016RmhORGhtWWpBd05EUmpZelUxTlRjM01qa3dNRE5rT1RrNFkySTJNRGt5Wm1SbU0ySm1ZMlpqTldFek56bG1PRGt5TVRRMll6bGtOek14TWlJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-frp-and-wooden-fishing-vessel-up-to-24-m",
                "title": "Guidance for FRP and Wooden Fishing Vessel up to 24 m",
                "docs": [
                    {
                        "id": "guidance-for-frp-and-wooden-fishing-vessel-up-to-24-m-pt-3-vol-a-2022",
                        "label": "Guidance for FRP and Wooden Fishing Vessel up to 24 m ( Pt. 3, Vol.A ) 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa05yTjFWMGJ6WkdUVFU1TWtsS1VHUk1jVzFWTUVFOVBTSXNJblpoYkhWbElqb2lPVGhGTW5GS2VtdFhSRmd5WmxoSVJGTkJkVXBGTW05alFuZ3dhazB6YWxGeEwweFpVUzh6WTBwME1rbHBlVEpIYmtsNlkzTXliU3RXWTFwbVJGWm5WbWxYY1RsVVoyTk5aekZPTVdoS1kyOVBRMVF6Ukhab1dsQlNhRWh4TjFscE1sUjVlRkpRV0RGcGMycHVLMU50Y2xSUE1qVmtSVmRuTm1SNWIzVlZiV2cyWkVsNGFWcEhhWHBCZW5wV2JqbEZLMVp6Y0dJM1ZuRldVRmg0YTFsU2Qxa3lhM05KUkRsVlMwSlJNVTlvU0c1cWVDOU9SVXd4Vld4b2FHODNPSFZyVjJvMlRGSlpXWHAwUjBwUGVXVTNNMlYwV1ZwQkx5dFhNblZRUmtSSGVqaHBVMHRwUTBaVFowaDJZMDFsYUROT0sxaFRVMnBtUldwVVptdzBSbnAwWkhCb2RsbGxhakJFUTBOdGEzTXpSa1k1Y2pGM1NsRTlQU0lzSW0xaFl5STZJakZqTVdOaU9XVXpNelZsTkdJNVlqQXlZakZrTURjME5tRmpaamt3WW1VMk5qQmxaR1E0WW1KaU9HSXpPV1EyTUdWbU56ZGtNbVV3Tm1Rek0yTXhPR1VpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-autonomous-ships",
                "title": "Guidelines for Autonomous Ships",
                "docs": [
                    {
                        "id": "guidelines-for-autonomous-ships-pt-3-vol-1-2020",
                        "label": "Guidelines for Autonomous Ships ( Pt. 3, Vol.1 ) 2020",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbGxCVDFab2FHcFhRV2h4YWxKS1dYbGlSblJJVEhjOVBTSXNJblpoYkhWbElqb2lZa3QzTlZGaGVHb3dPRmg1TTFSU2FXczNUbXhHYTJkRWJHNUJaRTRyV1d0amMzSkpWVzFIWlhsc1pUVnNRa3BMYVZaRVprRTRWeTlpWXpsbFJHcDZXRlJ1VVRJMFRUTkhRMFl3WlZGdE5GWm1abVZIVG1SaVV6UnhSemhoTVVWblYwWlBTa3RDYzNOdmMwTlVlRkpOVFZvdlZUQmtRV2QwUm1ZMmVrSTJhRkIzZGxJelRYWXZkV1pFSzBFM05uQlZOV2wxVTNwNmRETjNLekpCVmtOYWNrUkdXbXgxVkhrd01UazVWSEZDY2sxMVZGTXZURGwzVVdNcmFVeEROVTg0WjFGa01GbzNVRUpzY0ZGM0swaEhiV3BGTlU4clp6MDlJaXdpYldGaklqb2lZVEk1TnpoaFlXVTVNalE1TlRobFlqY3pPVFExTmpreU5qSTNNalUyWlRaa1pqQXpNREZqTkRJMk5HRmpZVFV4WlRSaE1qQTBZVEJoT0Roa05tTmxNU0lzSW5SaFp5STZJaUo5&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-thermoplastic-vessels",
                "title": "Guidelines for Thermoplastic Vessels",
                "docs": [
                    {
                        "id": "guidelines-for-thermoplastic-vessels-pt-3-vol-2-2023",
                        "label": "Guidelines for Thermoplastic Vessels ( Pt. 3, Vol.2 ) Dec 2023",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbEY2Ym5aVVRUSXlVV0ppTWtKRE5TdDBOamQyYzFFOVBTSXNJblpoYkhWbElqb2lNVTlIYlRGVE5tUXlNR2swTUhwelRFbHFia2QzYkZoTVJsWnNkelF3UVM4NGVpOUVLMnhaTmpKVVFWVkNjbWRQV1hCRlQwRlRkSFJuYTFwM1VsSkdZMnhNVW1kbWFUZExSMHQ2WVVGUmFIcERaMFpOT1RkR2JVdFFha0pZUTA0MVNsWktWbmh4YlZFcmVsVnllRkUyWkdSVFJ6Y3ZSRWxVUkRGTWJWcFpWblJ3UTFkNVNVVkdVR0ZOVERnd2FpdDBZMWt3Um5aWU1UbHZia3h6Y0ROWVkyWlVMM0JKT0doRWJFMWlaWE5FY2s1RlZGSXlRWGhGYmxsMVVHa3dkMUUwS3poTldqaHNhbEZFYWxoVlVrcHpjM0I0UVRWcFIyVkxjRFpSTlVwNldXVjJXWGs1T0U5RlJHY3hVVDBpTENKdFlXTWlPaUpsT1dSaFl6bGpZek14T0RrelpqbGhPREUwTm1VelpqYzVNell4TldRMk5tUTBaVEEyTVRkbE9XSXpOMk5qTVRFd1pUTTNZMkkxTnpZMU1tUXdOMlkySWl3aWRHRm5Jam9pSW4wPQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "peraturan-kapal-kayu",
                "title": "Peraturan Kapal Kayu",
                "docs": [
                    {
                        "id": "peraturan-kapal-kayu-pt-3-vol-vi-2023",
                        "label": "Peraturan Kapal Kayu ( Pt. 3, Vol.VI ) Jul 2023",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbTQyUlUxcFRHUnFiSEppTUdwd1FqWmpSMGRpWTFFOVBTSXNJblpoYkhWbElqb2lOMVJsVTJKbU9VWjJjRXN4Y21sM2EwaFZSVEZLVjBkVVN5dG1NMUVyUmpsVFlXTjVUM0JqV2pSak9WSmlUVWhTYmpad1RVSkdPVTFOVTJ0MmMwOVFWaXRMU0VkbGVHaHFUVU51TW10NVIxZ3ZTa2syWWpSMlozRlVlVmd5WVhkQ2NWZHZhME4yVFZoWVJHTnRSVEZvUkVWQ05XdG9aU3RDWlRWR1ZVVTVXSFF2TVRCSU5IcG5MelJGS3paNE4zRjJWbTlKUXpFM2RWRkZRM05pWldsQlpHSXpZWGQyWkVsdUwxQTBQU0lzSW0xaFl5STZJbVppTkRrNVlUTTJOVFExWWpVMFpqUm1aR1UyTlRBM1kyUTJPVFUwWkdJME9HVTFOemRqWmpaaE5EZzNPVFJpWWpBNE5URTRZV0ZpTnprNE5UVXdZVGdpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-classification-and-construction-of-wig-craft",
                "title": "Rules for Classification and Construction of WIG CRAFT",
                "docs": [
                    {
                        "id": "rules-for-classification-and-construction-of-wig-craft-pt-3-vol-viii-2006",
                        "label": "Rules for Classification and Construction of WIG CRAFT ( Pt. 3, Vol.VIII ) 2006",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbmgxWjB0eFZIZzRUV3QzVmxwRUswZHZkM0kxU1VFOVBTSXNJblpoYkhWbElqb2lTMUZ0VERKV1dEaEhNbXgxVGxVeWFVZDZVVmdyVFhwM09VNVZabWxQWXl0aVpsZ3daa2xEU2tWUFVrNXVMMjlyVDJGcVluSk1WWFZVVlcxTk9HUXhkVXR5YVRORlQyRmlVakEzU1hORFUyUlZaMnRoU1ZkbVFYTnhjbm8yYUZndmJYUm1NbXBSV2xkcFVYZE1RVVJoZGtoTmRuTkNlblZCWW10cWJVVkhVMEZRVW1wblNETjZTazVwVWxKRVNrd3pMMkl2VmxkeWFUSkZRMDR4Y3psRWMwZG1NMk0zUVZsSFJGVTNjRFJGWlhWUllURndTMnBYTUhOR09FbHRlbTlWTjB0T09XSkRTazl0YW5FeVlWbzBZMGhHVlZGeU1FRnhiWGRtTnl0c04wTjBlVU0xYVVZNU9IRXZUMUJNVld4Q1RXWk9kRUY1TlVKdWQyNUVkSHBaVEdGUmNWaDJhamMxTUc5TVVYZDVUV2xhYXpKSk1uYzlQU0lzSW0xaFl5STZJbUptTXpVeE9EWTRZelk0WXpSaE5UY3pOemt3TWpJeE5qRm1Zamc1TVRjNFpUVmxZMk13WTJRNU5EZGtNVFF5WmpoaFlqSXdNVEpoTmpObVpqWmhNallpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-crew-boats",
                "title": "Rules for Crew Boats",
                "docs": [
                    {
                        "id": "rules-for-crew-boats-pt-3-vol-x-2020",
                        "label": "Rules for Crew Boats ( Pt. 3, Vol.X ) Sep 2020",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbU5RVG1obGNHUmFVV3BQUTNCS2QzbFRlbVY0SzJjOVBTSXNJblpoYkhWbElqb2lWRVpVWm5aU1NHVnBValpYT1dwcmVtOVplakU0YzB4Q05FcHVSRGhKWTJWNmRWcFFNRTF4VldsV2FrVkpSVmRUYWtFdmExUTBUelJwZFZBd0wyNXBZV1JzTjJoVFMwODFSME5NUTJkR0wxTTNOVzUxUXpCbE9XMWtWMFppWTFaUWIyNHdUekZLU25aaVYwMU1aamhEWVRSa2MyTXhSRmRPZW10aVVTOHpaMnNyTWpkSE1UbE1NbVl4UVVSTFlqVXlZbGhVTVdWQ2FHbFdUekI2UWl0WVpuaHljVU5pY2taelpsTjNQU0lzSW0xaFl5STZJalk1WkdNeFptRXdaRE5tTkRRMk5EVTVOREF5TlRjMk0yVXpaalJpWVRGalpEZGtNR0pqTmpaak9UZ3pORGsyT1Raak56TXlPRE0yTmpJMll6QmlZVE1pTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-fiberglass-reinforced-plastics-ships",
                "title": "Rules for Fiberglass Reinforced Plastics Ships",
                "docs": [
                    {
                        "id": "rules-for-fiberglass-reinforced-plastics-ships-pt-3-vol-v-2021",
                        "label": "Rules for Fiberglass Reinforced Plastics Ships ( Pt. 3, Vol.V ) 2021",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJaloyZWxsYUsxWktVRGx4UWs1d2NrNUxiWE5wTjNjOVBTSXNJblpoYkhWbElqb2lRVlp2TlRoVGNtcENkVkEyU1VwWU5FRkpZM295VkZoNFNGWlRhMDV4WmxjeVVXeDRhWGR2Y3pSSE5YVXJhblJpVGtvcmNrdFZVVEpPUVc1T1UwcElXakJuT1haalVuVXhWekpZWVZBNVF6QnZUMkpvY3pCeE4yNDRVakJ3V0RSdkx6WXdjamhaU1VSdllWWlJaMDVpYkV4R1FXTkhRalJLT1UxRlRqRk5iMUJXY0RGWFpqUjZhR0Z6YjJGWFRIcE9lRlJvV1ZsTFRUWmlZV05CVVdrM01tMUNPVTF5VEVnNWNuUnJVazkxU0VWUFpUWkdXbVV5VFVSaGVURXdjVWhIVDNCeVZ6RlplbWd2WjJkRE5Hc3pOeTlPWnpaUGFEWklVVFYxY2xSSWNGWnNSWE55YkdwV05uWTViWEpsVmtSbVRERkViSGh2TTAxNVoxUk1WVEpyVHlJc0ltMWhZeUk2SWprNFpEYzNOV1EwWmpKbVlqRTRNamd4Wm1GaVlUUmlZMlppTVdReE5qRmpORGMzT0Rrd05qbGhaV1UxTmpsbU5HVmxZV1UzWWpZM1lUVmhOR0l3WkRraUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-floating-dock",
                "title": "Rules for Floating Dock",
                "docs": [
                    {
                        "id": "rules-for-floating-dock-pt-3-vol-ii-2019",
                        "label": "Rules for Floating Dock ( Pt. 3, Vol.II ) 2019",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJakYzWlZGTVdqRnJNbEJ1UlVsclkxcDZVREpsVVZFOVBTSXNJblpoYkhWbElqb2lVRzExWlZWNFVscDBNR3BIU1V0M1VFOXpXV2xRV2poSmIzcFJNVVpDY1RNMGFHSTVhMkpNTms1T05XY3liSEZKUTBreE4wVm5OblJ3WTFKVVlXeE9NRXhzWmxKRWNVTlJUaXRXWmxWbldsZ3pNMUJWUWtsQ1MxbDZUVnBaWm1kM0swSlhlRzlzYjB4a1Qzb3lRVWhTVmxwblkzWXpWazlETVZoSmNVeFpTV0ZrWVcxbVNtdHljRTVQTVVvdmFIWnFRM1JaU1dkVVZWWndUbnBMZEhadU9HTlNVRmhHYUhOdE1FMUNSM0V2UzJRd1RHUkdOMmhxVkV3ck1YZHhTME1ySWl3aWJXRmpJam9pWkRSa01qazBNelptT1RkbE9ETTVOalZqWm1RNE1HTmxaRFJqTmpsa01qWmpaVEZtTTJKbU1XTm1aalJsTURReU16SmtZalV5WW1FNE9HRmhaRGt5WVNJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-high-speed-craft",
                "title": "Rules for High Speed Craft",
                "docs": [
                    {
                        "id": "rules-for-high-speed-craft-pt-3-vol-iii-2022",
                        "label": "Rules for High Speed Craft ( Pt. 3, Vol.III ) 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJazFPVGtaTlNuZElNSFZIYVZab1VpOHZTRk4zYUZFOVBTSXNJblpoYkhWbElqb2lOSFpqYlcxcFNreENVR1Z3ZUdaRGQyUnpZMGxXV0RaTGRFVmhkRmt4YjNreFRFZFZiMFZ2WTI4MVNtSTFWRkJXZGtWc09YQjZSM0JOUjFWR1JIWjRiR2RFYUUwelJXVlBLM2xYVHpCcmJFbEZSa2t4U2xoQloyRXpNVmd6VjJKTloweFlVbmhEVlUxS1RHcDFjVmRvUjNadFZ5dG1UMU16S3pkR1FYaFlaa1J0Ukc5WGFtcDVUMEpGZEVsSVNYbFJSbkEyWW05cE4zWjJXblZUYUhSUmFXeDNNRGQ1UTJ0bFlUbDVUakpqV1ZOdWJ6bHRkMFpsZGtKSGFsbDFkMFJYSWl3aWJXRmpJam9pTXpBeU1UVmhZMlV5TnpWbE1UTm1ZekU1TURCbFpUaGpObU14WkRnNU9EUTRaR1JpWm1FeU1qTTBOR0UyTTJaa1l6VTVNbUV4WlRaaVltSmpPRFZrTWlJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-oil-recovery-vessels",
                "title": "Rules for Oil Recovery Vessels",
                "docs": [
                    {
                        "id": "rules-for-oil-recovery-vessels-pt-3-vol-i-2005",
                        "label": "Rules for Oil Recovery Vessels ( Pt. 3, Vol.I ) 2005",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbE5CWWtveE1YWTFWREpDY0RGb1ZVaFhlVkJCY2xFOVBTSXNJblpoYkhWbElqb2laME5pWW5sRVFUVnNjRXR1Y0ZaRk1FRlFObkIyTlRGNk1VOTNUSFp6V1hKc1pUZDNRemRDUm5CRWVWUjBOV3RaTUdGVVdtOVpWa0pCTWk4dlJTdFVVM0V2YVVveWRXeHliVWhvWjB0dGRVSk5aREJuWWtsNFUxQjNOVXRvUlZwQ05WQkhOMDA1ZFVZeGRWcHBLMll6WXpsQ1ZubHZMemxTT1RkalVWWnhSbEpQUWxST1NuUTNOVE5DWlZWblNqVmhWRWt4Y1RaU05YQlJaVFZ0TjNCMVRXSkdaMVo0TjNJNVJtNVJWbWRFWm5FNVZ5OUtNR1pzYzAxUGJURkxVVXMxTUdKcVNHVTVSRGN6VTBJNFVrNUJXamROT1ZKcWR6MDlJaXdpYldGaklqb2lZVE15TlRaaU9EQXpNRGN3WlRKaU16QmtPV0psWkdNMk5EWXhaak5sTmpreU5qbG1OemN4T0RVNU9UVTRNemxrWW1GaVptSTRaVGsyTnpOa1pUUXdaU0lzSW5SaFp5STZJaUo5&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-patrol-boat",
                "title": "Rules for Patrol Boat",
                "docs": [
                    {
                        "id": "rules-for-patrol-boat-pt-3-vol-xi-2020",
                        "label": "Rules for Patrol Boat ( Pt. 3, Vol.XI ) Aug 2020",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbFZvWTFkb2JGWXZZeXRrU1hwMlowdGlXVU5LT1djOVBTSXNJblpoYkhWbElqb2lVWEExUmtKRlQxbzFTMmh5S3pSM05Vb3lSMHQ1TWpkSlZWVnJObnB1VlRVcmRVRk1NRkpWV0dSVVZFcFJOa2RzT1dsbEt6bEtZMnBRTUZGbGVISlBjMjFTZUVsT2JVSklkMnRHYTJwT2FrNUNVRzEzYkVWTFRFRmtlSE5tTkc5UGEzSTFaVFZ2Y1RadGJtZEJTbFpIYjNkV1pEZE1ZamswUW5KU1YyTjRWV2d2WmxCNmFHWnlaM0F6TUcxRGMzVnNNalpDVlhORWVtRmxSRGhaWWtOd1QySTJTak52VUVKYVZsVTVNV3BEYVdsak9VaEJlblpQUXpSalEybFFjMVU1SWl3aWJXRmpJam9pTnpOaU4yVTFZemt3TVdJNVltRTNNbVEyTnpCaU1UTTNNamxtWlRrMFlXSmlZMkZpWlRjMVpqWTRaVE5rTVRnMVpEZzJPRGMzTURVeFpXTTVabU0zTkNJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-small-vessels-up-to-24-m",
                "title": "Rules for Small Vessels up to 24 m",
                "docs": [
                    {
                        "id": "rules-for-small-vessels-up-to-24-m-pt-3-vol-vii-2021",
                        "label": "Rules for Small Vessels up to 24 m ( Pt. 3, Vol.VII ) Jan 2021",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJamxTVVVGamIweHBPR3AzUVc5WlVqaFFUbUZTV0hjOVBTSXNJblpoYkhWbElqb2ljbGRQT0ZGb2F6RnRSRVZyTWk4d05sbEdRMnRzVlRKUlVFTTJlRkprY0ZkRE0xTnhaSFV6YzFwNFVVWjVZMFZPTkVSYU1UUldVWFZ6UjBSdVQzTXZNbkowWjFCVmQyeFFXWEEzYzJkUlltTkdhR1ZhWTA5NFRuUXZaMUV4VlhkMmFWaG1PRlpYYW1ocVZVcEhlRlZ0YlZOa1kwNXpUR3hCUTI5SlNuUnJSVnBITHpSYUx6UkhiV1ZIVWtKb2NuQkxWbEpJTDNseE1WTlFNbEJwSzFOU1UzSlpPVGRtSzBoclIzZGlVVmNyY0RCVlRYQlBUVkk1UTJaNE0waHBPWEpZTDFrME1ESTJUbTh4Y1dWc01tbDZhRmxCU3psQ1p6MDlJaXdpYldGaklqb2lOekl3WVRBek1ESXlNems1TmpabE5tRTFPRGxtTVRaaE1EUmtPVGszTnpCbFl6azVPRFJrWmpsbFlqRXhNVGxrWkdJd1pEZGpaVE5tWkRGak16STNZeUlzSW5SaFp5STZJaUo5&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-yacht",
                "title": "Rules for Yacht",
                "docs": [
                    {
                        "id": "rules-for-yacht-pt-3-vol-ix-2019",
                        "label": "Rules for Yacht ( Pt. 3, Vol.IX ) Jul 2019",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbnAxUjI1MFp6RnNSVkZFVEdWNE0yOWpaVkpLYTNjOVBTSXNJblpoYkhWbElqb2lWM0Z1TXpkRmFFaDRNM3A2UVhKemR5czRiR0phTWxoYU1GSTNRakYwS3pkTllrWTJUUzlLVG1odVJTdHNla2RYYldkSWFqZExaMmxMU0VSS2NuVXpNV1pFVjFsa2RIVmxSMnRRWnpnNFNHUnJWVkJSU1VabFQxTkZZelZ3TlhVMlkxZHlOamM1UzIxc2FVZ3pNa05yZVdSTGNsSllSaXN6VEhKNWVrUTFiRWRIYWtWcGFYVjNRMVpMVEZsUU1XWXhPVGxYUkhReWRsbFpOV3BWWTNaQ1YzSkRZVWhFUVVWVGVtMW5QU0lzSW0xaFl5STZJbVl6T1RFMllqazNORGRrTkdVeE9UaGpNbVl5WmpsalkyVTJNR1kxWVRZMU1URmpNMlF3TURabE1tWm1ZVGhqTnpNeVltRm1ZemczWm1JeFpHUTFZamtpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            }
        ]
    },
    {
        "id": "part-4",
        "title": "Part 4. Special Equipment and System",
        "groups": [
            {
                "id": "amendment-guidelines-for-certification-of-loading-computer-system",
                "title": "Amendment Guidelines for Certification of Loading Computer System",
                "docs": [
                    {
                        "id": "amendment-guidelines-for-certification-of-loading-computer-system-pt-4-vol-1-2023-jul",
                        "label": "Amendment Guidelines for Certification of Loading Computer System ( Pt. 4, Vol.1 ), Jul 2023",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbmx5TjJab1NXeGxSRzg0TTAxeVJVa3JRVXBuVEZFOVBTSXNJblpoYkhWbElqb2lVazB6YzI5S1IzbEdZaXRDZEU1S1ltcGtXblV6YW5reVlVUjJhREZ5WmpOdE5GQjBkWEJOTlVkMWVVNWFhbTQwV0c5dWVtdzRVVXBwU0VkVlFVNDVTQ0lzSW0xaFl5STZJalZsTUdaa1pEYzNNRFE0T1dZM01UVmpOV1kzWldaaFpqVTVaak14TmpBd00yVXpORE0zTkRNNU9UWXpPR0l4WkRVMU1EQmtaR0kxT1dJNU1HVmxOV0lpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "amendment-guidelines-for-the-bridge-arrangement-and-equipment-on-seagoing-ships",
                "title": "Amendment Guidelines for the Bridge Arrangement and Equipment on Seagoing Ships",
                "docs": [
                    {
                        "id": "amendment-guidelines-for-the-bridge-arrangement-and-equipment-on-seagoing-ships-pt-4-vol-2-2022-jan",
                        "label": "Amendment Guidelines for the Bridge Arrangement and Equipment on Seagoing Ships ( Pt. 4, Vol.2 ), Jan 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJalZwUTJGUmMwMVRielpOU25wcVdVTnhhR2xpTW1jOVBTSXNJblpoYkhWbElqb2lSMUozWWtoVVJWUmtiVmMxTUVGVVRIazJVMG93U25oUU5USmFiVWxvTW1OeFNqaHlaMDFhYVdjNVpFMVJiSEZuWkhoU1VUZDZXaXRTZVhSSVpVeHdReUlzSW0xaFl5STZJbUprTkRnM01qYzJORGMzWm1ReE5EYzBaRGN4TWpSaU1qVTFaalkyTWpjME1qTTRZakZtWmpKa01UaGtOR016TmpnM05USmxPVGxoTnpkaFkyUmpZekFpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-equipment-on-fire-fighting-ship",
                "title": "Guidance for Equipment on Fire Fighting Ship",
                "docs": [
                    {
                        "id": "guidance-for-equipment-on-fire-fighting-ship-pt-4-vol-c-2018",
                        "label": "Guidance for Equipment on Fire Fighting Ship ( Pt. 4, Vol.C ) Jul 2018",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa0Y1V0dJMVF6UmlXR2Q1TmpOM04xTkpjRzlOYzNjOVBTSXNJblpoYkhWbElqb2lNMGt6WVRCalQyY3hSMFEzUjBWaFZUTjVWVFpoVFVZck9IUnlhbmgxY0ZCVFVXdGtUVTlqYldacmVtdzVSV1pDUTBWWE9GQmpiV2R4UXpocFMxVmhNMlZYWkZWWWJ6Rm1SR2h5VGpCWFJXb3ZTVkpoT0dVMFozUlpLMjFETTFjcmNreGlaRVJGVXpKWmNVMTZLMVUxYjJoWWNWWjFNM2QyYm14NmF6RjZiRmhoUjNCVlp6WXdOMmxtTkUwMlFVNVhWM2RZT0RoVVFtOHZWbFpvYXpCaU9GQlhXazh5VlRsWlkxRmhSRm80ZDNSbGNqSnFVVXRsVWxrclJsUllVR3QwT1VwYWFHSTNPV1JEWnpkWE9IQnpRelp5WTNSSWEySkdSMW8xVkVkVGVtNWlTM0Z5VVZSeFJYSmhPWE5VZEhGVk1rZDZhREp1ZUVwS1FrOURSekp4S3lJc0ltMWhZeUk2SW1OaE9XVXlNR0ptTm1NME5HWmhaRE16T1RaaE1XSXdaREJsTXpFeE16Sm1aRFZtWldSak1EY3pOR0UyT1dJeU9EZzFaVEkyTnpOak1UZ3pOVEEyTkRJaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-risk-assessment-application-for-the-marine-and-offshore-industries",
                "title": "Guidance for Risk Assessment Application for the Marine and Offshore Industries",
                "docs": [
                    {
                        "id": "guidance-for-risk-assessment-application-for-the-marine-and-offshore-industries-pt-4-vol-a-2025",
                        "label": "Guidance for Risk Assessment Application for the Marine and Offshore Industries ( Pt. 4, Vol.A ) Jul 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJblp5ZERkeFVFcFRjbTlXVFdoT1l5dHBTWFU0TUZFOVBTSXNJblpoYkhWbElqb2lORkl3V2pSR09YUnJSM3BSVEd0WmExbG5WVWxTU0Rrd1EwUnhkMHR0TDNObU5VMUtUblpyYUVzNGRrNVJXREZGTjJVMVZrSlFWVVZhVVc1MU4xSjJiM0pMZVU5cWMyTjRRMHB0UW5vemFrZEhjRGg2UlhwWFdGbFlObEZxZEc5WVlYWjFaa3hrY2xSUFN5OTRLM2hOUjJSWVVrVlFZM1ZJYlZSVlRWWjBaMGRZUTJzeFQwZHhRa3RhTkc1MVEzRk9WVEE1YVhaSWNrRktVVFowUlhkMlJ6Y3JiR1Y2VURnck1WVmFhRGxtUVhoMGVraHVNMmRMYWxsdlYzZzVaV1pvVVRKdFFVNTZTMHh1TkdnelkyWXdZbHB4WW01VmJFVlZaamxhZVhZNGIwNTJRWGRHUTFScEszQTRjeko1T1VnNFZWazRUWEpyYVdjd2RIZHRTME5GYlhscWQzbDBaa2xIZVZWRWVqVkdkemMwVUVsd1EzTXlRalZMWm5KR2QwbHhLMWhRWTI5bGRFdEZVbFZrYUdkNldGSjJiSEZXTmxSelNqRmpXVXQ0V0RGTU0zRk5RMDVFZEhWM04wbGxlRVZFZUZsMk5tOTRNbkpoTlVjM2JYaExlR1Y2VVhKMk9UQmtZbTV2UFNJc0ltMWhZeUk2SWpnMlpEWTFOVFJoTnpGbU1tUm1aR05qTURCbE5ESTNOREkxTkRFMk4yVTNNR1l5TTJNM1lXRTVNVEJoWm1SbU0yRTRNemszWWpoak9HWTBOV1kwWTJRaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-certification-of-loading-computer-system",
                "title": "Guidelines for Certification of Loading Computer System",
                "docs": [
                    {
                        "id": "guidelines-for-certification-of-loading-computer-system-pt-4-vol-1-2021",
                        "label": "Guidelines for Certification of Loading Computer System ( Pt. 4, Vol.1 ) 2021",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJalIzZDAxemVVaGtZblZNWWxCck4xWTBNMjFqV25jOVBTSXNJblpoYkhWbElqb2laRWRFTWpsNE1YaFBORXBITlhoaU5HeDJiRW92VmpsME9YcEdNSHAxZEZVNWJtdERjVk5VV1VZdmFYaDFSVkpYVTFGaGFITllNSHBESzNwcWRrMXdVVmhNUTNoaU0wRkdNekZDYXl0eWFXNTNVMFUyYVc1MVVUZENhMEp1Y0dOWWNra3hNMDFOZWt4UFNraG9Memh5WlRrMVJVODRkbkl3WjFoSGR6TmlUelk1U2xKdk1FMXFNMDEyUlc1MFZFNHhRVlZKYVd0UmVqRmliak5JTmxGbk5YTmxXSEpaTjBwcVJHTXdVV3RwTmxGUGVrcGxVbFZLWm1jM1JHb3JNbE5yT0ZKcGQwdG9hM00wVDJ4dGVtbDFSVkExVkc5eE1VZFRWM00zTDJwdWJqZHJVRkJvZUd0dFRHSnZabXRNY1ZGUFRXVjFVWFJDUzJGckswZHFXamRMTlhNd01qVnVXSFIwYkVrMlJrWmlhRlpYTXk5TVpYbEVOV3htUlUxU1RpdEZZaTl0TjAxb1ltNVpkMVU5SWl3aWJXRmpJam9pTWpneE1UTm1OVFkyWXpkbFl6aGpZVGRpTXpjM01URTJZV0ZoWldReFl6Z3lPRFJqTVdKaVlUYzVNR1ExT1RWbVpHTTFZekl4WkdObE5EWmpOVE0yT0NJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-loading-gear-on-seagoing-ships-and-offshore-installations",
                "title": "Guidelines for Loading Gear on Seagoing Ships and Offshore Installations",
                "docs": [
                    {
                        "id": "guidelines-for-loading-gear-on-seagoing-ships-and-offshore-installations-pt-4-vol-3-2025",
                        "label": "Guidelines for Loading Gear on Seagoing Ships and Offshore Installations ( Pt. 4, Vol.3 ) Jul 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbEExTXpacWVYSXdRVUpxUjBzdmIzVmFUVUl3YUVFOVBTSXNJblpoYkhWbElqb2lWRUlyTDJneUx6QmpaWE53YUhOaldHRTBjVmRIU0dWcFEyaFhTMGhZY1ZvM2MySnRlRk00V0VoVFZVdEdhMVZyZDJKa09XbG5NMU0yVjBobGIwcFBaREppYW1WMmJYaDNaM2hGVlVVeWFrOUtRVWw0YzNRck9GVm1iWEE1U0ZKcGN6RmFla000ZW5GT1lsVTNZV3hXVDJoSloxSkRjbXhCTVM5SmFuTkxlamhwWldWamVHWnNlV1pNTTJsWWNXdFlOVE5vTUdWRFMxcFBRaXRSY1ZWSVlXSXpWVEZvT1hjdk1uQnhhMjlMU2tneWQzWkZhRGxMTVZrd1VGRnhVMFpJZUhCMmVHRlFXbTlaWkRkTlIzZERUbEZUU1daTFdHOWFNVzl1THpoMFowSTNhREpWV2pOT1NWYzBUbmhtVkV0WGRIZEJlSFl5TURsNFFYQTJlVGRvYlhwdGJVc3dkalZRUlRGWFlTdG1TbFIzY0cwNVNIVjVWQ3ROV0dSTVRHdDFVV0ZUTWk4d0t5OTRhMVZJWWsxb1FXSkZUVnA2Y0dWbWR5dExVRGhRTlhSVWRYUnVWMFJhWW00d2VGUkRTbGt4VEc5Q1psVjNQVDBpTENKdFlXTWlPaUk0WmpSak5UUmhZVGRoWWpkaE1UZ3laR1EyTVRoaVpqRTVaVGMzWldVM016STROV0ptTmpJeE1tRTVNVEUxWkdVeVpqQTJNRFF5TXpOaVltVXdaamswSWl3aWRHRm5Jam9pSW4wPQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-maritime-cybersecurity",
                "title": "Guidelines for Maritime Cybersecurity",
                "docs": [
                    {
                        "id": "guidelines-for-maritime-cybersecurity-pt-4-vol-4-2021",
                        "label": "Guidelines for Maritime Cybersecurity ( Pt. 4, Vol.4 ) Mar 2021",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbUpKWW1obU5XMW9ZMUJqWmxCUU9Hd3JUM1ozYzFFOVBTSXNJblpoYkhWbElqb2lVR1p4TTFVMGNHUnpkbk5FUlZWYVFscE1WRkF4VEZsQ1pHMDNaMmRZZURWaldXNXllRVZ4ZEV4b1NWRjBVbVZ5TUUweVNIQTRhVzU2ZWtSM1IwTmxjM0prT0ZrMFlYQXZkSFpOV2pCTlp6ZFdWemxQVkhwMVpGa3JhalpPU3pSc1RHTndPR2hoZHpsVlYzQjJkakJMUjBobGQwSmtibUpEUmpkWk9FTXphM0o0UTBweFJuSnBaRmN6U3pGNU1WUjJZbk5QV0haREswOHJWREp6YW05WllXdEJhVXRoTUhORFIwMUpjRU0zVkc0elNUWmFReko0WlUxQlVYVTFhblp1ZFhGbk0yMVBaQ3RxY0VFclRraFJka0p5TnpkSFFUaElhVEpKZUd3elJWWlRVMmxCVjNSUk1XaEpUblJwYUdkRmVHMU5jSGszYlU1NFEzVlpURmh4T0NJc0ltMWhZeUk2SW1ZNVl6RTVPRGhpTlRZNVlXRmlNelEzTjJNelpXSmhNRFk0WmpCaU9XUTRZbU00TlRCa1lqTmlPREEyWkRWaFlXRmxNekUxT1dNd01EWmtNVGd5TW1RaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-shiplift-and-transfer-systems",
                "title": "Guidelines for Shiplift and Transfer Systems",
                "docs": [
                    {
                        "id": "guidelines-for-shiplift-and-transfer-systems-pt-4-vol-5-2022",
                        "label": "Guidelines for Shiplift and Transfer Systems ( Pt. 4, Vol.5 ) 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbFJ2VW01aVEwaEZlWFpzVUZNMU9VcHpSbUYyVldjOVBTSXNJblpoYkhWbElqb2lNVEJ1UkVad1pUWnVTbmRUWVVGTmJtUlFjVmcwUVc5TFdtVm5VMUZPUjI5V2FrY3dMMk16VjA0NWMxWXpVazRyYlRaQlNVc3dZVU5DWm5wbU1tTkZZa3QzU0c5WVNXcEVSbE12V1ZoMU4xTjBVRUl2WkVWSE1tdElkSFJaSzNFNFQwZHVjbkkzTHpjNVdHc3pLMnRPUlU1NGJIRjJiRWwxVDNJeWFtbDJNVE5QVGxaTFFXdFlZVTlLWm5rd1ozWkdkbmhsT1c1ak9XcDJhVkZRU3pOVVIzRXlhM2wzWVdwU1VIQklVMjk0VGxodkszYzBVa1ZXTTFWVlRUbHZURUpoUjAwMllYaG9PVkpwYWpGeWFrUmlXR3BrVVZjcmNXNTVRMHBRYW1WNU1UTnhSMVkzUlZoWVNXUnphSG9yVjFvNGNITnBjemhaUXl0cWNsRkhiR2hzTTJWYVV6Y3JNVk5QZDFNMFRGRmxiakZ2VUVKb1lVRTlQU0lzSW0xaFl5STZJbU13WkRaaU16RmtPR1JqT1RVek5EVXdNalV3T0dWbU1UVTJNMlJpTTJVd05HSTJZbUU0WTJFNE5EWmlaRFV5TldSaVpUVXdZalU1WVRZNVlUSXlaamdpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-the-bridge-arrangement-and-equipment-on-seagoing-ships",
                "title": "Guidelines for the Bridge Arrangement and Equipment on Seagoing Ships",
                "docs": [
                    {
                        "id": "guidelines-for-the-bridge-arrangement-and-equipment-on-seagoing-ships-pt-4-vol-2-2022",
                        "label": "Guidelines for the Bridge Arrangement and Equipment on Seagoing Ships ( Pt. 4, Vol.2 ) 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbGxGZUc4NGMya3JOMnhCTVhaWU5IVlJkMWRTV25jOVBTSXNJblpoYkhWbElqb2liMmt4YzFsWGNteHZZVVZ0TTFCMWEyNTZlVFZXT1ZaR1pXRktPRFZrWmtKT05rNWlUR2xuWjFKaVRscHZaRE5EYW5KWU0zaGliRmRKYm1WaU1XWTNhbk00VDJWbk55dHpiaXRaVld4WWJWWklWSE4yVTFjeFNGRm9XbGRhZWl0cGRuWk9VelZCUjFkcU9FeG5TMnBEYVZvelUybEtVMWxvVlZCR1dtNHhNRmxtU1RRMVRWZ3ZMMkpQY2xGd2RpOUNkbVl6ZW0xUU4wUm5VV0pyWW10YVVDdFhUbVEzY0hoeVQzUkNLemt6YlRnMFVFWXJWbXRJTDNCeGJIZHhMMjVvZFVoSU1UbEdaREJ3SzFWTFFtUnRkM0ZRUTA1MWVYaHBXRWRHUjJSck9VbG5RVnB0ZFZGSVJFUk1ZbUpVUWxNMWExWmtUVzVxVjNSbmJHbDBkblpTWlZZNWVHVjFVVWRpYW5KdFJpc3pka2RSS3pORVIzWmtValZNVUU1dVRWRnNha1JsTVZOQlFYRXJLMGt5VkVScGVFUjJlak5EYm5OSVZVNHdZbFUxTTNwS2RYcGpiWGRXVWxSRVJEWTNPR293UkVkR0syZEJQVDBpTENKdFlXTWlPaUkzWm1OalpXTm1ORGRtTXpFelpUbGtaVFUwT0RRek0yWm1aR1F4TldWaE1EbGtZemRpTUdaa1kyWXlNVEJpTkRGbU5tRmlOR0ZoTWpJMU9ETXpOekF4SWl3aWRHRm5Jam9pSW4wPQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-dinamics-positioning-systems",
                "title": "Rules for Dinamics Positioning Systems",
                "docs": [
                    {
                        "id": "rules-for-dinamics-positioning-systems-pt-4-vol-ii-2011",
                        "label": "Rules for Dinamics Positioning Systems ( Pt. 4, Vol.II ) 2011",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbmQ2UW1GS1FWaEhWblpaYUc1TmVVRlNVV3R4VW1jOVBTSXNJblpoYkhWbElqb2lkM0JWWmpCc1ExZHNWMUZSVFRGa1lsTjBUek5QY1VGSWIwSk1OWFU1UTA1d09HTXhSMU15TVdad1RtMUlNSHB0UzFWNFVXWlJjVTkzVWtoRFFrbGlUVGRuUWtwdFoyY3ZMM0pVVnpkMGRWVlRjazB5U1M5R1VuQndaek41TkM5Sk1HbG5NaXQ1Y25WTFdGQjBjREpYVDBKb1dXbGxOVTl1T0RsYU5GSjVkRFVyYlhKalEwNHlNMVJPZFdsVFlWTm9ZMnQxTm5sc2RrZE1RV00xTHpseFpEYzFRbXc0WlU0NGFFczVZMVJwVTIxeGJWaDBRVWRPTTJ0MlMyMURWRmhvT0drMFF6UTNORzVvU21aNlFqbDFaRmcxVTJaV2VXVTBZWE53WlZoa1dYa3diMEpSWW1WNWJuQlRSVGM1VTBoMmFtY3ZZVGxWWlVkV2NEUnVjbE16TXlJc0ltMWhZeUk2SWprMFltWmtORFZqT1RNMVlUTTVaRFk1T1RnMk9XWTVOREpqTlRsak9UWmhNak5pWlRFeE4yVXhPR1kxTm1Fek9Ea3dORE13TUdKaE9EQm1NV1JqWkRraUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-stowage-and-lashing-of-containers",
                "title": "Rules for Stowage and Lashing of Containers",
                "docs": [
                    {
                        "id": "rules-for-stowage-and-lashing-of-containers-pt-4-vol-i-2025",
                        "label": "Rules for Stowage and Lashing of Containers ( Pt. 4, Vol.I ) Jan 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJamQ0Vm0xaFowNWtlVlZvTVU1cE1uTktka0YyUm1jOVBTSXNJblpoYkhWbElqb2lNVTFIZVcxQ2MyNHhaVXR6VDFoc2JXTmtXVGh0UlZsTVFsaFhZaTlTSzBRMVdVY3ZNR1oyTmpoa1lWVlpSblFyTVROeVJGcFdRVTA1YnpSMlIzUTBWRVF6YkRsQ05IZDZiRmg0UlVoS2VHeHlRbHBXVVZSdVlYUkZjRXAxY1ZKUFFscENiVnBzUW5oemQwOW5NM0o0YlZaNlJXWlNUV2QzTlVkRlozRktRamd2TW5ZNE5WcFpjMEpXZHpGYWNESXhUakZTTUZOblNtVlNPR0kwTlVkcEsxRjRkRU41T0ZrMk5qWjVWQ3RrYzBGTGNHSk1OamhVTUcxSVdEVXhiV2xOZDNsemJERTNValFyV2pacFFXUXdSVEkwU0hOUVpERldSa2hIVkdOd1l6VnNhVVJZT1hoUGJ6aFRUVFlyZG5waVNuUnhSM1pqYkVwcEt6aFdkbWRpTkNJc0ltMWhZeUk2SWpNeE9UQXlNVEUwWkdWa05XUmxabUkyT1dJM1pEa3hPR1kwTnpKbFpURTFOMk0wWXpWaE5Ua3pOMlk1WWpBeE5UUXhaalV6WkRSalpqa3hZMlkzTmpNaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            }
        ]
    },
    {
        "id": "part-5",
        "title": "Part 5. Offshore Technology",
        "groups": [
            {
                "id": "guidance-for-buckling-for-buckling-and-ultimate-strength-assessment-of-offshore-structure",
                "title": "Guidance for Buckling for Buckling and Ultimate Strength Assessment of Offshore Structure",
                "docs": [
                    {
                        "id": "guidance-for-buckling-for-buckling-and-ultimate-strength-assessment-of-offshore-structure-pt-5-vol-c-2015",
                        "label": "Guidance for Buckling for Buckling and Ultimate Strength Assessment of Offshore Structure ( Pt. 5, Vol.C ) Feb 2015",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbmhKYWtOaUswbEJTRFJ1ZURaVWVWQkNVbXRoTlZFOVBTSXNJblpoYkhWbElqb2lWM1ZMU1ZwaGVteFVPR0ZhVnpGc1RraE9lVWRwWVM5WVQzSmxWSFF2UW5sR05VNUJhbFJqUkVOWk1UaFBNM2g0V0dJcmMwdFpVRklyTmxWNllreE5kVXhqVG5Cd01IUkZjM1pKVm5Ob01HbGlVRlpPUkM5cVNsTkhlV2h3UjAxUGIySm9Oa3N5TmxkS1IwUTRhR0YyVXpWSlpEbDFhMU5WZEVKVVEzcDBLM05wTWs1MlFUTXdkbkY2V1hSeVRWQk1hVnA2UzJSME9XWldibmQ0WkdnM2RVSlFTemxNWTBOU1NISjBkVVpKWkRoUWJXRm5hM1JQVDBKeldXWjRZazVyZDBGTE9IVjBkSFpzVm5VMGJUSldjems0VFUweFMwaDBPSGxyUWl0RVFVUkxVVE5OWlZkeFdsbE5TR3BpV2toMGRUVTFlVFZ0VnpsVGIzcFhaRkJKWVRrM1UwZG1ZMUJNYURSdGRVcE5WRVZoYjNwTFdraFhZa1E1V21GcFRVa3dUa00zUkVzMU9EUjRhMjlJYW1OMWIzZDNkbFJrZDBOSGFVVjBhVzQ0U21JaUxDSnRZV01pT2lJNE5ERTFNR013TWpZMVpUUXdObUkyWlRaallqUXhORGM1TnpVeE56Z3lOekU0WVdFNE9HSm1OakkxTVRBNFpXUmlPREJpTlRreU1qTmxObU5tWVdVeElpd2lkR0ZuSWpvaUluMD0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-fatigue-assessment-of-offshore-structures",
                "title": "Guidance for Fatigue Assessment of Offshore Structures",
                "docs": [
                    {
                        "id": "guidance-for-fatigue-assessment-of-offshore-structures-pt-5-vol-b-2015",
                        "label": "Guidance for Fatigue Assessment of Offshore Structures ( Pt. 5, Vol.B ) Feb 2015",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa0pKVDNKd1JVeE5la1paZEhoUk9WVm9UbE1yZDNjOVBTSXNJblpoYkhWbElqb2lLMGhtZUdsV05tNXRWVnBDTUM5b1IyTjJPV2hWY0RCMGFXSjRMMEpCUW0xek1qRk9aV2t6VjJkMmJsRjFRV3BNVjB0eEszTTJRWHA1T1hsQlJtdFpMM05xU0hVd1pXODNlRVUxY0ROQ1N5OWxjV3RLV1hBeFMxTk5lbWgwVVZGNmRTdGtTRXBaYlhSSE1UQXlWRzF6VkRobmJFWm5NalJOVlRKcVFWUTVWbk4yWjBneGMwWjZOa3hXZVhaVWNXVXZiRWhSUVZWNWRHZFZhR055T0hkeWJXVTVSbWhKWnpoM1FtUXdXSGx0VmxSMlpWcElkelpCUTJOeVJteDVTak5MUVVkVGEzVkpaMmMwUVhaaE1tTmpPVXh6VUc5b1UzQXdUbnBpT0RacFJqTkNUa0ZRVUdSQk5URkxPV0pRWms1YWVsbDNja3MzTWtGdVVGSkdVRU15ZW5BNGNVcEpTU3RzVDI5emMyRTFXRWx4YlVFeFFsRTlQU0lzSW0xaFl5STZJbVkzWXpaaU5qSXpNbVF4Tm1KaE5qVm1ZV0kxTnpNNU5EbGhPR1l6WlRjMlltRXpObUZsT1RkbU1XSXlaR1V6TnpBNE9HUm1PVEZrTWpNek16VmlaakVpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-life-extension-of-floating-production-installations",
                "title": "Guidance for Life Extension of Floating Production Installations",
                "docs": [
                    {
                        "id": "guidance-for-life-extension-of-floating-production-installations-pt-5-vol-d-2024",
                        "label": "Guidance for Life Extension of Floating Production Installations ( Pt. 5, Vol.D ) Apr 2024",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbmRGTUcxRFVYWXhjVUprVW5CS1pYRkJORTF1WVVFOVBTSXNJblpoYkhWbElqb2lNbFUwTkdrMmQyRmpUSEJyZDJ0cFpHdFVObFJLVG5wdU1rSk1Ra3B4VFU1Uk4xbGpkM0ZYZGtWa1kzQTBialZDYlU5S1EzZFBiamd5Um1Oak5rMVFaSE5VYVd4Tk5YYzFOVnB4WVRnNVFUUjRVMWxWVGtGd0wyc3lORnBWTDNWb2NrRnRTbXBHWTFWSlkzTlNWMWsxWWxWYVMxaE9iRmRLUjBWdVZEY3JORlEyTUc1MFFpdEJaamRVY1ZkNGJqaFpXWFZMWW1VMk1sUk5WRUpUUjBkUVJrNHlMMlZrWml0d1lXTlVRM05EWXpOcVVEZEtlVkJPV1dKbGVVMVlRMWx5UjFaUlZsTkhTRVpuWVhaRlowUlRReXRtWWpjMmIxRm5UaXRrWmtrdmJVeGFaalZXVEZaSksyczNORU5VV205SFJ6ZExXWFpxY1dGaVMyWkhaM1JDYlVOalExaG5RVFYxVUdKUFltZHdLMVZvV1hKWFkwSm9MMkYyWTBscVJrWlVZVXgwVkdwdGVWbFliVGc5SWl3aWJXRmpJam9pTnpVNVlXRXhOVEprTnpZNVlqSTBPVFl6WlRKa05tRXpPVEV5TmpBNE5tUXhaVFprT0RZNVlqQTFZVFF6Wm1KaVpHTm1ZMkl5WldZME1tUmpZbVJsWXlJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-position-mooring-systems",
                "title": "Guidance for Position Mooring Systems",
                "docs": [
                    {
                        "id": "guidance-for-position-mooring-systems-pt-5-vol-e-2024",
                        "label": "Guidance for Position Mooring Systems ( Pt. 5, Vol.E ) Oct 2024",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbnBuU1VSVE4zVlNXbFJEUlRaa05tc3hWMU5KVW1jOVBTSXNJblpoYkhWbElqb2lkeTlZUW5aQllUbG5RMEpXYlZGSGJuSkNRbXBHUldwNFpHOVJWazR2YjFBck9VMUNXR2h3YlhvMVFXVjRWMnBYTkhSUVdtcDVNMDVtY25vMk5GQTRaR2hsZUdjMWFVSjNURzlzZVc5elJ6VkNaM2xJV1VOdVJVRm1XRVpqWnpKVFNFUjJSa05xWW1OWFIzY3ZaV2wzVm0xWmIxRjZjemhxVFVnNVpETXdTMUpxYjNCNVNFOUdjVGR0UkV4NU1XbENhSFEwZEdsTFkwNUtVbnBoZFdaek5saHZMMVUzWjA0M1kydE1iV2xyUzJ4VFlsVmxNV2hQU0Zad1FtcEZXVVpaVERsR05XOWxhazB6VFRJeU1reENWbU12UW5WVVNIVm5PSFJwY25CNVUwNUZNVzFCUTI0eE5sUnJXVDBpTENKdFlXTWlPaUk1TlRkaE1tWm1aakU1T1RrNVpUVmpZVFV6TldZeVlUWXlNVFZpTWpnd1kyRXlPREEwWldNMlpUWXlZV0V5TkRZMVptRTFZakkyWXpnMlpEZzVOek00SWl3aWRHRm5Jam9pSW4wPQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-survey-using-risk-based-inspection-for-the-offshore-industry",
                "title": "Guidance for Survey Using Risk-Based Inspection for the Offshore Industry",
                "docs": [
                    {
                        "id": "guidance-for-survey-using-risk-based-inspection-for-the-offshore-industry-pt-5-vol-a-2012",
                        "label": "Guidance for Survey Using Risk-Based Inspection for the Offshore Industry ( Pt. 5, Vol.A ) 2012",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa05FYWpCQldqUjJOVFJRSzNjcmRuQnZVVVZNWWxFOVBTSXNJblpoYkhWbElqb2lkSEZpV2xGWVlVNU1aR0VyVDB4SGQyTmhjbkJwZDJkNVF6UkdZblEyVWpOa05VbG9TekZ6TW0xUlNuZERTbHBYYURKTVRXUk5ZWEZ4WTA5cFZVaHFXRFZLVDJnMWNpdHJkMFZhY21oMGREZEVPVFZpWWpWM1RGaHRjRGxrVmxreVNVaHNURVJPZWtOR2NHTkhkRmNyVDB4MU1HZDFZM05MT1RBNFowRlZjRXQyVlVsbFVWVkZNM1IwWVd0bVdHNURSVVprWm5wTFQwdFliVEJ4WWxSVk5UTk1aRTQxWVhWclpHMUVjSHBtTW5oSVdtNHJlRXRDV1RaYWJsRXpNMDlIY1VSVVRrWnRhR2MwVW5KUU4zQmFSMGxIVUZsU05GWmxhVTAyUldGaVZEZEJRWFYzVVdJeU1UZGxRMlJpVUdwT2F6RndhMUk1UlhSNVdWSkpVRVJzS3pZMGMwUlZLMEpIZWtVd2JGQlFUMXBPWmxwaWFIaE9Rakp1TVRaV04xUnZWREZ6VW1oT1pHVkJOMFJWUjFNMlEyVkhTVWhJTjBkTlNXRkRTRUY0ZHpVaUxDSnRZV01pT2lJMU5XSm1Zall5TnpjMU1EVTBPVGRtTmpBd05EazJZMkUzWW1Nek1ESmhZVFV3TkdabE16SmpZMlJpWW1ZeU5UQTBNekprTUdKalpqSXpaV1JqT1dZeklpd2lkR0ZuSWpvaUluMD0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-aquaculture",
                "title": "Guidelines for Aquaculture",
                "docs": [
                    {
                        "id": "guidelines-for-aquaculture-pt-5-vol-4-2022",
                        "label": "Guidelines for Aquaculture ( Pt. 5, Vol.4 ) 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa1JwVEV0SVNYTTFNR3huZFhOWlZFWkNNVnAzZG5jOVBTSXNJblpoYkhWbElqb2lObVlyTUhkYVNVUlFNRU5rYUc1WlRqSjJNME5VUTFvMUwxQmtOQzlIWjIwckx6RmlabTVNTDA1aVlYWnNTbEIyZVdWVGQyMUxXazVXYmxGNU9UZHFjQzlEVEN0V1ptNWFObWhxTWtOdmJrVkliVEpLTmtsemRuTXJkVVk0YjBoa2NUaE5Ua3R2VWpKd1pYb3ZZblJaZDJvNVlsaEVka2d2WTBWeWFtb3dZaXN2YkZNeFVFOXJaR0l6WkVGSGJrcHVTQ3Q0TDNkb1UxSlhjME42VTBwTEwwODJORmN6Tm5oU0wzbDVWMUJ3WWtOUlNVc3Zlak1yYkc5VlFqRkdUVWhOVlhWSlkzaG5UbWhqWVRsNmRWQXJaMWhCYjI4NVFUMDlJaXdpYldGaklqb2lOR1V5TW1OaU16ZGpOR1UxWkdabE1EZzRaV1ZrWmpWbU0yRmlZall5TVdJeFlXWmlOekExTkdJME5HVTBZek15WXpWbE4yUXdaVGRoWW1ZeU9HRmpZU0lzSW5SaFp5STZJaUo5&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-floating-offshore-liquefied-gas-terminals",
                "title": "Guidelines for Floating Offshore Liquefied Gas Terminals",
                "docs": [
                    {
                        "id": "guidelines-for-floating-offshore-liquefied-gas-terminals-pt-5-vol-2-2021",
                        "label": "Guidelines for Floating Offshore Liquefied Gas Terminals ( Pt. 5, Vol.2 ) 2021",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJblExZUdONkwyaDNTVEpQV1dwWlZqZENNRkZZUjBFOVBTSXNJblpoYkhWbElqb2lTbmRFUkUxeldFSXdiRkpZWlVkT2NDOHZhRVZCZGpNMlJtNXNZazlLTkRjMVVWRkxUVFpwWVhkQk1WUkhZelZZTm5ONGJEQk9VbXRLVWxKTFlYUXdSMHh1V1VFeFVsbzNOa2t3YUdoUFdGcGpaMU51YWpSTlNHMDRiMmxaV0hvNFZYaE9PRXQ0Y2twMU5DdDBTemMwT1ZOaWNIYzVXbEZxZHpSMFRXNXFlWFZOVW10NGJVUXJhRUZJT0VsS1FVbENVRVJIV1VwcGNuUnlielZJYjBwa1puQmpkRmRPVm1aU09HOUlRV3RzZVVZNWNsSkRjbFZQZHk4NFJXTk5ZbXRhTURNMVNFUmhNVkpoTjJKSVJGbFhUR05DTjBreFUzTnRiSEk1WkhONVdtVldiMk5hWWpod04xWTRha0Z6VWxKYVVuQlRlbnAxUjJWWWVFVjRXRWQyVUcxTlFtVkpPSGRsUVVsaWRUQlJkRWx0ZFNzclRuYzlQU0lzSW0xaFl5STZJamhsWkRaak0yWTFOV000T1RKbE4yVmpOVGd3TWpnNE1XTmtZV1l4TUdNek9HVXlZbUk1Tm1VME0yTTBZelV3WkROa1lqVmtaRE16WVRoaE1tSTBPR0lpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-floating-production-installations",
                "title": "Guidelines for Floating Production Installations",
                "docs": [
                    {
                        "id": "guidelines-for-floating-production-installations-pt-5-vol-3-2025",
                        "label": "Guidelines for Floating Production Installations ( Pt. 5, Vol.3 ) Jul 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbXhEVms5dlNtTTBiRVJhU1dvd2NHUlhOVFV5TDJjOVBTSXNJblpoYkhWbElqb2lWMEpxUlZaTFJYUlhOR1ZhTm5WT1VFbFhaa280TmxFcmNWb3pMMDl4VUZNeVpuVTRSbWQ1T1hsdmRHeGFNMlJOYW5CRlJ5dHRORmMzYld3NVMwMDBZbHBXU2pGMWNXcExlVTFHWTJWQk1EWXlXU3ROZG1adGNWQkpRV3M0VHpoWFRHWXlhbWhJZVVWUE1FUmpNSFU0VUhNelpHSjZUVzk1UVRWa1UxcEZWRWwyZURnMmQwb3JXbkpLY2t0dlFtVlRZVUo2VVVKYVZWSjBjVXBTT0RjNE9XeEZRMVlyZUROSGRpOWhVRTg0VUVGTlozcEZiMkl3Y2xvNFVUZGFhVGhRYzFoU2VFcGFkbkkxTjB4SVlrNVBTbEJ4VFhKeVJXSlJaVEZaVUVWUVluWlRUVmQyYlhjclIzTkxUbXg0UmpkdmIweHZWR1pPUWpjM1NuTmFlV0pqVnlJc0ltMWhZeUk2SWpFd1ptVm1ZbVkyTVRReFltUXpOamMxTlRVMk5HWmpOR1JpWlRFMk5XSTBZekF4T0RKaE5tVTBNMkUyWlRBM01XVXdNMkUzTWpReU5ERTFaR0poWkdVaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-classification-and-surveys",
                "title": "Rules for Classification and Surveys",
                "docs": [
                    {
                        "id": "rules-for-classification-and-surveys-pt-5-vol-i-2024",
                        "label": "Rules for Classification and Surveys ( Pt. 5, Vol.I ) Jan 2024",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJalZJUVhvNGNuTjFjMUF2Y1RWUWFGaHNUM0pRWjBFOVBTSXNJblpoYkhWbElqb2lhbkZ4TVhGaUswcEdZVGxzUjJ0T1RWcHJORGhRUW01SEwzbEdSRWhTTlRWRlIzcERRVXhrUkhGUFpGWm1TRVphTlZFd1ZHcEtZMmN6TlZwS2NtSnpORU5IVUZBdmIzZHhkMGhITWxOcVZtNUlibFZ2VWt4WGNpOTBTM1ZrWWpsWGNFOHlRallyWm14RFFteFJNbVk1ZVZGdFZHWlJORk5MUm14Sk9HbHdaRzlsVTJ0dE9TOHlSbWxTT1RSdkswaHNRa1YzU0c5RFYxWmxZak5DTlN0WVlVNXVVR1U0V1hkdFZVVldOR0ZTWWtSYWNqQjFlR0pGWjIxb1FreDVVblZUUmtSMVZFcGhOMDFNTmtkM2QwY3hOVVV6ZVhORGFHdG1iRFU1ZGs1Sk5rOXlTakZrVTBkMVVFa3diejBpTENKdFlXTWlPaUppWXpNMU4yVmhNV1V6TnpJeE56UTFNMlJpWkRNMFlqQmxabUl4Wm1GaU4ySTJNV0l6TmpZNE5HTTNaV00xTkRRMk5UbGpOVE0xTmpnNU5HTTBZVEpsSWl3aWRHRm5Jam9pSW4wPQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-electrical-installations",
                "title": "Rules for Electrical Installations",
                "docs": [
                    {
                        "id": "rules-for-electrical-installations-pt-5-vol-v-2011",
                        "label": "Rules for Electrical Installations ( Pt. 5, Vol.V ) 2011",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbEV5TkdsTlltcFVOMFp5Y0dSWU9FdFNhM1ZvVW5jOVBTSXNJblpoYkhWbElqb2liamhITmxaU1FYWklTbmx4V2psaFdXRnZSVWQ0YWxGSVJXbzRSbGRIZFZSYWJURjVNVUpJY1hsaFZtMUpVM2h2Ukhob1EzWkZlazlsYzBOUFUwWlVNVGhXTURoSGQyRm1RblppZFZOVFRGaEtUbEJsUzJWQlRrMUtPWGgyUW1wRGVXSXdTR0pYY2pGUmIxTmlWV2RtYVc1RmRVdHdURE14ZWxrM05HYzJRa0pLZUU4eU9TODBkVFF5VnpoNE4yUnZaRXB2UnpsdWF6VkpVR0p4WVhScWNGTlZVR2hrY0hodGNXUnFTM1psVFhaSlRsQk5WM2RLZW5OSFFsQlpRbkpOSWl3aWJXRmpJam9pT1RJMk16azBNRE0xTlRsaVptWmlNemxtWVRJMlpXRTNPVEppTkdZM1pEUXlZemN4TWpOak1qVXhZbUpqTjJObE1tWTBZV05rTTJNNFpUQm1ZVGMyWlNJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-facilities-on-offshore-installations",
                "title": "Rules for Facilities on Offshore Installations",
                "docs": [
                    {
                        "id": "rules-for-facilities-on-offshore-installations-pt-5-vol-xii-2013",
                        "label": "Rules for Facilities on Offshore Installations ( Pt. 5, Vol.XII ) 2013",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbEl6T1c1TE5HNURhVEUzZFM4d1JXdENSVmcwZW5jOVBTSXNJblpoYkhWbElqb2lka1ZzYVVOa1RXUnhNMjFCUnpSak5rUTBkVVJWV1ZoTVdFUTJVRkF2WWtaVFZtOHJlWEJhWjFKMk9HSk1aVkpuVG01dk5UbExVR1YwUjJaemFXdzNTR2xXYzFkNFUySlpkVU5JY25aTldXTm1RbmgzTmxGbE1tNXBTMVpUT0U1elMxbHljVWRXS3paWFNpOWxWM2wzYTNkb1JsWlNPV3RrZG1ock9IcDJjM0pNTWpCdWFYbEZhbEZzVDJ0cmFtdFJZVnA2ZURkTU5VZElia0ZaWldjcmNFZHRTbXhyU21GaWIxY3JhSE4yTjJ0bldsZFdRa3RSY21zMU9VOXZUV1JQVld0ME4zSnBhMDVUTms1SmFFaEhPRE5ZU0hKbWJtRnRXVGxOUjBwaUwzQkJjamg0YW0xemVrdHpVRlp3YXpJeU9GaGpiMkp0VW5SU1lXMTFTVUZwV2lJc0ltMWhZeUk2SWpZelptSmpZelpqT1RsbE1qY3dOVGd6WldZeE5HSmxPRFUzTlRJNU5USm1OR00wWWpGaU1EZzVZMlpqWWpKaFpUVmtOR1F4T1RsaE9XWm1NelF3T0RZaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-fixed-offshore-installation",
                "title": "Rules for Fixed Offshore Installation",
                "docs": [
                    {
                        "id": "rules-for-fixed-offshore-installation-pt-5-vol-vii-2011",
                        "label": "Rules for Fixed Offshore Installation ( Pt. 5, Vol.VII ) 2011",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJazh5T0RCelJEWnBlbWh6VG1kYVNGRlVNR2hIY1ZFOVBTSXNJblpoYkhWbElqb2lLMnBSTDJoSmVqRlNUazF5Wm5CdFowazRTVXR2ZUdoUFFVdElSMmM1ZVZCVmJsWm1aV2haWTI5MFVIWmxSbmsxVjBoWk5tWjVSRlZIWXpabVFtaFFkSHB4TjNOTFZGUndPV3AwU2tGNU5tUllZamRyWkVOUk1teFNjbWRLVlU5RmNsUTJabWRKWjJKV2MxbERUM00xWmpZMEt5OHhOMnBHUjBWa1IwVmFVWGxqYlZsRE1FdzFVVU4yWkZkMlJtSkZTbEJWUzFka1QxaHVkRUZCTTNaVmVuWnFaVThyY0RWUFpEZGlVMFp6UkdZeVZFaHlOemxvVVdWNVNFTlhUMlp4S3pOWFRuZEhibUozVGtVNU1EaEhTbmM1WjJ0cmJFOWlTMlZHVmxsS1FtdGFVR05qV1d3MlVVMUNSVDBpTENKdFlXTWlPaUkwTVRka1l6UTRNR1UxWlRFNU5XWTFOR0ppWWpKbE1UUTFNbVEzWWpBME5Ua3dNelV6T1dKbVlUWTJaV1E0TW1RMU5EWTFOVEpoTmpWa1lXRmxZVGsySWl3aWRHRm5Jam9pSW4wPQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-machinery-installations",
                "title": "Rules for Machinery Installations",
                "docs": [
                    {
                        "id": "rules-for-machinery-installations-pt-5-vol-iv-2011",
                        "label": "Rules for Machinery Installations ( Pt. 5, Vol.IV ) 2011",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJakJCWTJwYVRHdHJOVVJvVWxKSVFuRnZVVlZhV1hjOVBTSXNJblpoYkhWbElqb2lTMXBCY0ZGdVNsRnRNSFpCU0hWR1NVVlRRWFZQWWxwQ1MyMTNNa1k0Y1VOV1UxZEJVMlpJZEVOclZYQkhWMFZQVEZaamNGZElOVVo1TVRoTE5rRkRWM2szVkZaVGJVaGlZaTloWmpoTlVWTnpNM1F4VmtveU9HNWxhbU55ZGxBd01XbE1iR05WYWpSWmJrVm5iekl4ZGxWQ2MwdGxNMUpNZWpNNGFsVjRRMlJZVldsdVp6UldOMEpJYm10U2NtVk5ZVXB6UlZKd2NVTlNkWGQ1VDBaWGQybFZVRUpEY2l0WWFIbGtUM2hTZWxOQlRFMXZPR3hrVFdOaGFsVkNORUZuSWl3aWJXRmpJam9pTlRZeE9URTVPVFEzTWpVM1pEWm1PREV6Wm1JME5UWTNOVGRrTXpFMFlUWTJOMlprWVRaaFpXWTBPVGt5T0dWaU16ZzVaRFpoWVdFMVkyUTNaVEJqTlNJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-mobile-offshore-units",
                "title": "Rules for Mobile Offshore Units",
                "docs": [
                    {
                        "id": "rules-for-mobile-offshore-units-pt-5-vol-vi-2025",
                        "label": "Rules for Mobile Offshore Units ( Pt. 5, Vol.VI ) Jan 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJak5XUWxWNmJFTkVLMHhtUTBkUWExWjBPVE40YVhjOVBTSXNJblpoYkhWbElqb2lNWEJrVWpaNkwwWnRTM1I1VDFaUFZWcGtaMVpQTUhsNGFtUmhRVzByYzBZeFprOUxSM0J5U1RBek1YY3ZPVGhLTUhGV1FtazBOM0k0T0haVVNFRTBNSE5EYkd4M1dXWjJTM0k0V0hnNVZUWTRRa0pVV0RCbmJrMHhRWEJxU0doeE5sZ3lVMUZ4YVVaMlNtUkJia3R1UjJkT2VrSnhUa05rU0ZSUFRXdHBPV1JHUnl0NGVucDFiWHBXTTNRd2JXVmtjWEZLVVdzMlVqSlliSE4wUm10TVowVlphazV1ZDJaYVNtMWpRMDQzTTBzM1IwcFhhMkp0TjNaVllVWXpTMUZ3UW1oSVVrVlBPVWhLWTNSVVZsVnNXbWd5VWxORVFUMDlJaXdpYldGaklqb2lORGc1T1dRNE4yWXhPV013TlRRMU1UTXhOR1UzTkRVM01EY3laV0kyTm1Gak5XVTJPR00zT0RsbVl6UmhZMlEzTkdRM1kyUXdOVEZqWlRNeU4ySTROU0lzSW5SaFp5STZJaUo5&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-single-point-mooring",
                "title": "Rules for Single Point Mooring",
                "docs": [
                    {
                        "id": "rules-for-single-point-mooring-pt-5-vol-ix-2025",
                        "label": "Rules for Single Point Mooring ( Pt. 5, Vol.IX ) Jan 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJazl4Vm01UFluaHFSVzlUVlZWSE1tbFZVekI0V25jOVBTSXNJblpoYkhWbElqb2lhV0pQTWtOdGRreENRVkl2YlZGQlRYSmxSRzlOZEhoSE5Ea3ZSMWhOWVRWb1psYzRVVmhRWVc0cmVGcG1TR3AyUkc5TVIxRm5NR055V0dSRWEwTkZhVVJYYmpSdmVFSnhVQzhyYmxkSVdXeE5LMUJNUVdWSGJFZFBjMUkxZVhrdlYzaHNUbE5WTkhBdlNGRXdkak5rUWs5MFJXNVdZVk40WlRGelN5dExPUzlYVmxNMVRqVlNXVlZIVHpGVk1tUlpWRXg2YzI1Mk5WUmlZbWhrTm1kbGVXTTVNMk5ZVlRFM1RqUk1WVVF6ZFhOc2VVZzNXbGxtZGxGdWR5OUphMjFFVEUxcVQzQnNlbms1TVhad1NESm5lbVppWlVwbmR6MDlJaXdpYldGaklqb2lZakprT0RVNE9Ea3laREF4TnpsaU9Ua3laalZsT0RFNE1tSXdNRGd6TWpVMlpqZzBZVGxrTjJaaU9URTNabUUxWm1aa1pEWTNPR0ppTjJVMlpUVXdNQ0lzSW5SaFp5STZJaUo5&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-structures",
                "title": "Rules for Structures",
                "docs": [
                    {
                        "id": "rules-for-structures-pt-5-vol-ii-2011",
                        "label": "Rules for Structures ( Pt. 5, Vol.II ) 2011",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbWRvUlhKMVdqZG5kMU16T1ROWVlrOW9hRmRoV1djOVBTSXNJblpoYkhWbElqb2lXVkowVlVaamRWaDVhRGh5Y0ZOd0wzTnVha2xhTldGV1oyWmFSV1p0YlhSSFkzWmhPSFo2ZWxWaGFtczJjRTE0VDJsTmVWUmxaazFaTDNKNVNuRk9SbFUzWW5CWGNXeHVWWFpMVjNod2NGTk9ObEZ5UlhsWWJVUnBlazlPV21OTk9URnRkMnhzVVhFelIydEhlVTFUVUdGMGJ6bHJRVGh3WWt0NWRGUTJVWFV6Ukd4a2MwVjZUR2ROV0hsalVHczJZbkZRWTJ0MlZURnBaRVZEWlRrNE1uQmhlSGd3Unk5T1RGcHlaWGhqVUcxNWJUQnNiM2d2UzNsblQxcEhUSEJqSWl3aWJXRmpJam9pWVdSaVlUSmhOR1V5WTJFMk9ETXhabVF3WmprMVpHSXpPV0pqWXprME9URXlZbVUxWWpsall6QmtNR0ptTmpnd05qSTBaVEZqWmpjeU5qaGpNR013WXlJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            }
        ]
    },
    {
        "id": "part-6",
        "title": "Part 6. Statutory",
        "groups": [
            {
                "id": "amendment-guidelines-for-determination-of-energy-efficiency-design-index",
                "title": "Amendment Guidelines for Determination of Energy Efficiency Design Index",
                "docs": [
                    {
                        "id": "amendment-guidelines-for-determination-of-energy-efficiency-design-index-pt-6-vol-5-2024-jan",
                        "label": "Amendment Guidelines for Determination of Energy Efficiency Design Index ( Pt. 6, Vol.5 ), Jan 2024",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJazVHUkdwU2FXMTFTMlI2UWxoa1lWbzVPRWsxWldjOVBTSXNJblpoYkhWbElqb2lTMUJSU1VabEwwTlhiMmxITW5WdFEyOXBUMUpPV1dST2JFeEdhRTlLTnk5aFRYaHBlR0ZRZURkaU1sSTFUVFZXY2xWcVVqTkdUMnBoVEd0VWFWaEhlU0lzSW0xaFl5STZJbVF4TldNeE9UTTRNREE1WkRjeE16Vm1PR1E1WVRRMk1ESXhOekF4TVdFME16STVORE0wTW1FNVpUWXhORGN6Wm1Vek56ZGpPR1prTlRsaE5XVm1OVFlpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-inclining-test",
                "title": "Guidance For Inclining Test",
                "docs": [
                    {
                        "id": "guidance-for-inclining-test-pt-6-vol-c-2015",
                        "label": "Guidance For Inclining Test ( Pt. 6, Vol.C ) Oct 2015",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbmxxTkhrMWVUUmlTVEJVVTBsNWIxTndiVlJOVjNjOVBTSXNJblpoYkhWbElqb2lTbEE1TWtjNGRGTlRUa1ZzVkdNMWNrWk5kRzFCTVd4MWQzaFVXblkwYWpKdFRHTlZaR2RTY2psU1VDODVRMWxZYTBSWU9GUnJTVWhrV1VScVYxUXJObE52VTNvNGNqZHNhbHBwYkdGSWJrZDVXamQ2VlZCWWVWUjRaSGRpTlRGU1RqSnhPVE5IVm1WTFRWWTNVVmwyZEV0U09UVnlTVkphYkdVcmF6QnlURko0UmpkcFpWRTNVaXRJWW1aS2NFMWlVVzlZZFZSbGRrVjZaRFkwWjFWb1p6SlpaMnQxYlhsSlMzbzFPR28wWVhkUWVqQnNSbWxDSzA5UU1HaHJlVVJxZW5neFVrY3ZPVGs1V0V0S05URjNWa1pXUm10U05uUnpaMmhDTTJ4MGRIRTVNRmx3TjNSTk1FRlpVbVZGU1hZd2REUmlTa2g2ZUVaU2EzVkVlbk5VTUNJc0ltMWhZeUk2SW1VelpEazVORFppTlRVelpHRTROakUzT1dJMk5UQTJNbVV4TnpabU9UZGlaalEzTUdFNFpHRXhOVGt3WTJFM01XSXdZV00wWXpVd09HVXlZMk5sTlRFaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-the-audit-and-registration-of-safety-management-system-en",
                "title": "Guidance for the Audit and Registration of Safety Management System (EN)",
                "docs": [
                    {
                        "id": "guidance-for-the-audit-and-registration-of-safety-management-system-en-pt-6-vol-a-2017",
                        "label": "Guidance for the Audit and Registration of Safety Management System (EN) ( Pt. 6, Vol.A ) 2017",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJak5EUlZWQ1RtUllPSEpDVGpCa09EUjNjMmRIY2tFOVBTSXNJblpoYkhWbElqb2lPSFZqUXpSMlVuQjFha281YVdkTFUzUkxRa0pzYlV3eEwxb3JjMjloUlhORlFVaG1iSFpFWVdsTVlVSndZVU5IWnpCSWVUTlRla1pQWjB4dE4ySTNVbTVXWWxjNVlXOU9RV3cxV21zcmFXMW1ZbmszWjB0VGNVMUxSa0YzVFVSM2JYcHBhakpsVW01NmQyUnRWalpSTWpCdWRuVmFVRXAxY200dlVYaDZNbk0yUm1kdGNHSkNVa1pUTUVsM1lVZFVaSGxvWlc5b1drRnNVWFl6WkM5RE5VeDJVMlZRVEVsaU4wSnBUV1EySzAxMFMwWjNhVGxDVjBwd1psaFZWbkI2VlVKME1IVXliemR0TkdGclRqUlNTQ3RSTDBsTFZrMDNZM0ZTYVhCV2NpOXdlbFZGZUhBMFVFOTBkazlPVFZCM00yNTRjak5SWldVM1lWVTRPSGd5WTBsM2RteFhSMW8zVDBWV1NEUXhialV2TmpoSVNIYzNVV3BPYlV0NU5YVXJXRXcyT1c0elNsbzNhVVU5SWl3aWJXRmpJam9pWWpZMU1qRmtNakEzTlRoaU9XSTJORGMxWVdOaU9UZ3hOVFJsTnpkaE5UTmlabVExWmpBMVpXTXhPR00xTXpWbE16Y3pOVGRtTlRRek56aG1ZVGhtWmlJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-the-audit-and-registration-of-safety-management-system-id",
                "title": "Guidance for the Audit and Registration of Safety Management System (ID)",
                "docs": [
                    {
                        "id": "guidance-for-the-audit-and-registration-of-safety-management-system-id-pt-6-vol-a-2017",
                        "label": "Guidance for the Audit and Registration of Safety Management System (ID) ( Pt. 6, Vol.A ) 2017",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbkZDTjFVNWFYaHZZMVJ0ZFdGNWMyeElUak5tZEZFOVBTSXNJblpoYkhWbElqb2lhVzVrU0c5TFdIbEJOSFE0ZHpKWmRISnJOVWxXYkc4Mk1XdHJXV2Q0VW5FeVMwWnBPVWgwTjNoSFFVTkJjMjlCYnpocVNVaHhNbTF3VlVRMVVrNVZiVW80WWtNNWNHdHVaV0pQZEZJNGJFWjJhbWhwYzFGQ1Z6YzBVR1I0YlRCeVltUlNPWGRUUVRReWJGQmhaMlZKUzFrM1RUTTVObEphWmpONU1YbHBVWFJaU2xOaFIxVTFkbVZ1Y1hkeWVWaG5XbEYwVlU5U04yUmxWM1o0T1hsNmFrWnpaRXBKWVhGdlFtaHpLM05VTXpoU1dFWlRSWFFyVFdVelpuQnhlVGRJV25ScVEzaFpTRVJKYW5CcldYQTRjbUZLVVZSamQydG5Na1paWmtVM2VrdDNOR2x1TlRWWFJqQkplVVJKVlRaVEwxazVkSEZ5WjFVNGNUTklZM2cwSzJ3MVEzbFZXRXN5TkdZNWNsbEtSbUpTWXl0bU1XRlVhbU5xTVRONVRIQmxTRWhaUVdWTFJVMVVNa2s5SWl3aWJXRmpJam9pWXpWa016RmlaV0l4TUdJNVlXRTJaRGt6WVRkak1tVXpaVGRoTkRCbU9UUTJNakprTXpFek1qazVNekF3Wm1Ga05ETmtNRGxtTW1OaE5tUTFNVFU1WlNJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-the-verification-and-registration-of-ship-security-management-systems",
                "title": "Guidance For the Verification and Registration of Ship Security Management Systems",
                "docs": [
                    {
                        "id": "guidance-for-the-verification-and-registration-of-ship-security-management-systems-pt-6-vol-b-2004",
                        "label": "Guidance For the Verification and Registration of Ship Security Management Systems ( Pt. 6, Vol.B ) 2004",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJazB3WVhneE9Xa3habUoxZUhGeGNGZEpNRVp0UVdjOVBTSXNJblpoYkhWbElqb2lURkptVEhReFFYTXZOWE4yWmxVck5EUnlNMHhYYTNwUU1IRk1LMWhCZUdrM1UwdDVOVUptZUdsblYzaFBSMjl0VUhjM1FrVkVWRUkxUlM4dlYwRnJaalJ4Y0ZoVkwyUmtRelJtYkhVMGFuSnJRalJOVUZGWllqaG1WVkZ0TVRBemEyMTJNRmxHYms1SVIydHFkakpITTA4MVdqSkRWMlpVWnpOa1VUZE5ZazFyUW0xVFNHWm9RVnBQTkd0TVlrOVBPRFZLTjBoRlVFZFdNVWg2VFhOM1RVd3dRMUZqVlhCRFVVUXhkbTVNTDFKNlJub3JUbkEwWVZWelRtWnlTRk0xT0Zkc05FVXdNbUpuUzNSMFp5dDZaRzVTWjJoalRGZzRlbTVqYkVOSWFsTnBabGt3VDFwbFdFc3ZXV0V4UjJkTGNIQkpTVnBNYVRGalFqaGtSMGd6VWs0eVREVTNRVVV6TXpsUFV5OWlhbTkwZVRSaVEybEplamRRZWtObU0xWTJhbGRqTm1ZdmJrRTFjMVU5SWl3aWJXRmpJam9pTm1ObU5USmtNRGMxT1daaU5qTmtNakF6TkRFeFlXVTBNREJpTW1GaVpEWTJNamd4WlRNNU1EQTJNelkxTjJFMk1XTTBPR1V5TmpoaFpUSTRObU16WVNJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-on-intact-stability",
                "title": "Guidance on Intact Stability",
                "docs": [
                    {
                        "id": "guidance-on-intact-stability-pt-6-vol-g-2014",
                        "label": "Guidance on Intact Stability ( Pt. 6, Vol.G ) 2014",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJblpwUVRsbmVsRlNjWEZzT1dJeU1sZGxWalE1WkVFOVBTSXNJblpoYkhWbElqb2lNazV3TUVORU1DODRRU3RoWlRoNFkyRlBZa3BrT0RBMFVGSTRiRmRGT0V0aE1tNVJPVk5QWjBkamJVVnJVMnR4Vm1aaE0zUmlVakZaV0hwWk9YZzROMGxhVFRkQ09WcHRlRTFYUnpWTVFrVTFUWEJCTUROd2QwTlZiMDk2WVROV1pIRkVUbGx6UlhGcGJXcHVOM1ZxY0RSYWJ6Z3lWV0pTTkVzNGVuTlpWR3R1Tlc0d1N6RjBla0ZJZWpSVk1DOHZOWEExUTJSSFNtcHJUa01yVEZkdlNuVlRZamRuUkU5YU9UbHZZU3R6T0ZWck4wbGFZbWxJVFZjM2ExTjNjVXRvSWl3aWJXRmpJam9pWmpSbVl6ZGpObUl5WXpBd05XSmxPVFE0TVdWak5USXhNV1F3T0dWa05UYzJORFJqWm1VNU5tWmpaV1l4WmpkalptWXlORE00WVRFNE1XTXdOVFl6T0NJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-determination-of-energy-efficiency-design-index",
                "title": "Guidelines for Determination of Energy Efficiency Design Index",
                "docs": [
                    {
                        "id": "guidelines-for-determination-of-energy-efficiency-design-index-pt-6-vol-5-2023",
                        "label": "Guidelines for Determination of Energy Efficiency Design Index ( Pt. 6, Vol.5 ) Jan 2023",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbXBFTDJoS04waDFjMk15ZDNWNFFXWlFTMmRzSzNjOVBTSXNJblpoYkhWbElqb2lOM2hTYnpsdGRWUXlUMEpWWVdOclFrTjZSblJVWlROaVFsUTFMMWRYWldOSlFrZHphVkJIVWpSWWVuRnBTbUpGVDBsSE5ISjVVSEprY21aUWFFUnRUM1JOY0dKNVJsWkxUSEJOYjI5UlkzZFBVbFZ3YmpCd1ZVNUtOVmRwVG01dGNHTlpSbWRNVW5CRU0ycDZhemR6YVRWWVJUTjRRMlp0YzJwaFNpOVZNMjVHYmtaT1N6RXJNekZwVVhCWEt6UnZVbTB5Y0dkTWVEbFBWRmxDTkRJdllXSjZjazA1WW1Ga2RFRlBaa1V3VFVGeFJIcHRMemN5YjFFNVp6SjRkMmhhWXpVelFYUTVjRnBHYjJack1sWmhLMDlUYkRZMWQxVndiV0pwVDJ4dVYxbHJibUZ3WkRjeGFIa3lSRkEyYTJKb1NHZFpVMXBxZUVrNU5GSmhUVEowT0dGM1FYZzRjVE5CYkVKNE5GTjZaVVZRVm1KbVIzUndSVXRPYmxGQmEzQlpaMVFyVm1obmVXaElWMWs5SWl3aWJXRmpJam9pTW1FM1ltUmtOakE0TW1VM05qSm1NVE00TnprM01qVmpZekU1TTJOaE9USTBOREV3TldJeE16aGxNRE01TVRJM01tVTVObVF3T1RSaE1ETTNPVE5qTnlJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-freight-container",
                "title": "Guidelines for Freight Container",
                "docs": [
                    {
                        "id": "guidelines-for-freight-container-pt-6-vol-8-2018",
                        "label": "Guidelines for Freight Container ( Pt. 6, Vol.8 ) 2018",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbnB2ZFhkak5VZE1UVk13Y0ZOWU5tUXJUelV2Y1hjOVBTSXNJblpoYkhWbElqb2lUMXBUTld0SloweHZXRTlKVWt0WloyZFBTM04zWlc5S01YQm5ibVo2UzNjMmVURm9jM1ZPZVVkMk5tOHJaMFV4TlZWcFRtTndWbWxpUm01dVl6aHlLM2MzTUVSMk1rRk9UVXhtVkVSRFdEVlBaRXREZWpVclpWWnlNSFZRYTBaaGRuaHdTVE5LU0dzd1dXdG1kakZRTVVKdVJUbHRhVVZNVUhGRlNGcExXSE40T1ZkRk5qVjZjRzAwZVVWQ1IwcFlZVVpVZDJ4YVFsb3pSRVZvWkVwTmFEVjJURVpuZEhkdGNURnlUVEZqZWxGMWVGSlFWVWhTWldsSGRWaEtkVzUyTWtJMlUzUXpkSEpKWWl0SVpFazBjRkI1VFhGS1p6MDlJaXdpYldGaklqb2lORFUwTWpBeVpqbGhPVFV3WVdFek9EVTNNbUl6WW1VNE0yVm1NbU5qTmpWbE16WXpNMlJtWlRZeU1EVTRZalJsWXpjM05qTm1OVGd5T0ROaVpEQXhZU0lzSW5SaFp5STZJaUo5&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-maintenance-of-safety-equipment",
                "title": "Guidelines for Maintenance of Safety Equipment",
                "docs": [
                    {
                        "id": "guidelines-for-maintenance-of-safety-equipment-pt-6-vol-10-2020",
                        "label": "Guidelines for Maintenance of Safety Equipment ( Pt. 6, Vol.10 ) Jan 2020",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbHB5TWpObVkzUXhUVlpXVUdOMFYwMUtRM0I2WkVFOVBTSXNJblpoYkhWbElqb2lRM3BaVUhndlduRlhTVVI0YWtkQ1ZIVlZWamR5WVhkdk9ITlJOVXhvY3k5aFkwUlpjSE5zZUUxSE9WSnpjbFJoTDNkRGJuTmhNV1ZoYnpWbmR6Z3lZbXhKVm14d1MwRnZSekpTYnpsME5sbE9ZV2hOUVZOQ1JHNVpVVVl2Y1hGUFNtcDJSM0poZUdsVU55dGllbVEyWkc1YWVFNXFOWFUyWWtGWmFFd3haWGcyVnpWVmJqVkpUWGxUV1Roc1RHVlVWMk5KUVU5VFNURkJVbGM0ZW5Rek5VMHZiREpGZEhONmJVcE5OVlpXU0U5SFRrZGhXR3BoVUZobU5uRkhVek5LYW5ZNWVtOUlNRWt4VVUwMVNTdG5kV3gzVVdKaWFuTlZPV1Z4VGt0Mlpqa3dZa0ZEUmtnclZWcEhla0YwWW5kSU1UTlhVR1F6VVc5WlRtVkpka2hOVVNJc0ltMWhZeUk2SW1Nd1pHUTRNR1l4T1RCbVlUaGlNR0ZrWkdJNU5HWmpZMlUwTlRJMlkyUmtOREkzWWpkallUVmlOell5TUdNMlpHRXpNREl3TUdSaFptVTFaVEF5WlRjaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-statutory-survey-and-certification",
                "title": "Guidelines for Statutory Survey and Certification",
                "docs": [
                    {
                        "id": "guidelines-for-statutory-survey-and-certification-pt-6-vol-7-2018",
                        "label": "Guidelines for Statutory Survey and Certification ( Pt. 6, Vol.7 ) Jan 2018",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa0ZCWlhZcmRWQXliRmhrVEhJM1ZHOVpiVk5VVFdjOVBTSXNJblpoYkhWbElqb2lPWFZWTkVJcmJHTjNTa0Z1YVZWTloxSmFWR3g0TVdsTk0yUldhV1V4Wm1kVFMyMUtZbWhtTURGd1MzWkRjVkZpUlZKTE5YUlZLMVZyYjNCUFVXMTJiRTVvZEZWTVJHVkpWVGh2ZEVzek0wZGFRemc1YVVOTU5EaGFkM2MzZVc1Q2RWTXJhV1I1V0doaFVWazVUemh5YTB0MU5WRnlTRzlaUmtwbE5YSkhjelZxVUVsNVRYQjZPRGRYZVdKSVluVlJMMUJTUWxWR05qRlNaRWswYWxWbFNsTXJSMmMxVkd3NVVHdFFhRU5XZWpWaFl5dGxhbXRvWVU1b1VUaERURGxJYlVVME1VNXdTak41YkRaNGFuRkpaMVpvTVRKU05UWm5MMlJDZWxaWWRtSlJZblF3UjFNM2FtdHRXRXRFVm5Sd2IyTTRNV0l2UmpkbWNGVmxOMFJaTmlJc0ltMWhZeUk2SWpBM09XWXpOR1U0TkdObE4yRTBaRGRsTkRBeVpHTm1OalJoTkdabVpHSXhOREUxT0Rka01UTTJOVEV4TUdFNE9EQTRNR0pqTlRJMU5qQXhabUl4WkRBaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-the-audit-and-registration-safety-management-systems-en",
                "title": "Guidelines for the Audit and Registration Safety Management Systems (EN)",
                "docs": [
                    {
                        "id": "guidelines-for-the-audit-and-registration-safety-management-systems-en-pt-6-vol-6-2017",
                        "label": "Guidelines for the Audit and Registration Safety Management Systems (EN) ( Pt. 6, Vol.6 ) 2017",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbXhMUkRnMlpYbFVjRkJHUkZCNVJWcHZaMWg1ZEVFOVBTSXNJblpoYkhWbElqb2lOVFp4YWtKRFQxVjFUbkZCUkRJdlMxTmtjMmRpVERadlpIaFNZMWxHYVRaclFtZHZabUpvTVc5bVJqRnVkekpwZFdsNlRteG9WMGRJTkZOQlltdGpOMk5yVm1ZeFdqWXZkVmhYU2t4U2VDOWpWV3Q2SzNWa05VMW9hR0kyU25ObVlYWXJjMWhNTUdSMlZrbHFVVWRoVnpJdlJubEpObmRZYnpkcVpIRktTakJzVlZCMVRYQktLelZDTlVoalJHZDFVVWxFVDFWWlZVZHdXbk5OUTFNdlJGbHdVREZwWkVVNVYyeFdVbGR4Y201RlNYUkNkM1ZFT1cxVVJXUTVOV0l6UVhwc2IxZzRTVUpVYTJoUVRVUTNORU16TVVGaFVrSXZVa2hxZW1KS01WTldhblZwTkRoS04zSXlZV2RxUmtZd2ExbHFOMFp3WjBGaFpUTkJNRzB6VlRWa1lWcE1XRFpUVERFMGNtSlJaWE5wUkRGTFQwcHJVbmRUVmpVNGEzQkNRbkV5T1U5Q1ptSldTSGM5SWl3aWJXRmpJam9pTVRrM05USXdNVEl4TWpJM05ETTROVEJrTWpnMU5HVmxNek00TURNeE16YzJZV1JqT0dZd01HWTBZekUwWVdSbVlUTXpPR1ptWm1FM1pXWTBNMk0zTnlJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-the-audit-and-registration-safety-management-systems-id",
                "title": "Guidelines for the Audit and Registration Safety Management Systems (ID)",
                "docs": [
                    {
                        "id": "guidelines-for-the-audit-and-registration-safety-management-systems-id-pt-6-vol-6-2017",
                        "label": "Guidelines for the Audit and Registration Safety Management Systems (ID) ( Pt. 6, Vol.6 ) 2017",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJazlWUkZOS2REUjVZVEF2Y0Vwd1RGZFpUMk52ZVVFOVBTSXNJblpoYkhWbElqb2lVR3RWWWxOUmVHWk5ka3g0YURncmQyOU1hV3B5TjB0QmRVWk9NVzlUTmtjMlEzaFpkak14TlRGT2NETmtRMGx3UlZObWRYcHlZMWN4ZGxjdk1XOTBRM0ZYTTJSak0ybEdjeTlKV0VwT1pYaEhabXgxZFhoUk9FdFNOeXQyU1V0cWRVcFNORmhaY25ObFdtWXZORUV2VkdGSWJIWk9LMkk0VDNKcGNtRm1SMUIyTldNMk4yOU5kaTluS3pkTGNVWmpjMlJSWm5kTlNuZHRjalJoTm5OMVdVazFSR2hzUTFCUVNVdE1aMlZUU0V4NE1FbG5TMWxSWVhwSk4zVlJaVlJGY2tWelkyOXNRbmx1VkdrNGJFeE9VazVrV1dGVU1IRlZhak5CUlVwQlIzSndkbE5WY1RnMlJrZHpSVk5GWTJZemNGWkVPRXRpVG5kTUwwbHlVSEZpTjJ4UGIxcDROWFZsYlRsVmVtUmtZV04yZFVkRk5DdFJSaXRGV0ZaMVdYWnlLMVZZYWtKQlYybDRVV2M5SWl3aWJXRmpJam9pTmpBNFkyVTNNbVV6TURBeE56VXlOR1UxTWpZelkyRmtObVl5TXpNMFpqbGlZV1ZpT1RJME1URXlNVEJtTURjM01XTTVNbU0zWlRVd09UTTBPV0k0TUNJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-the-preparation-damage-stability-calculation",
                "title": "Guidelines for The Preparation Damage Stability Calculation ...",
                "docs": [
                    {
                        "id": "guidelines-for-the-preparation-damage-stability-calculation-pt-6-vol-1-2005",
                        "label": "Guidelines for The Preparation Damage Stability Calculation ... ( Pt. 6, Vol.1 ) 2005",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJazA0Wm5sTU4wOUdUV0k0YVVZeU5XOWFabmhQVDBFOVBTSXNJblpoYkhWbElqb2lSMEZGTlhWS1RqaFpSRzFQWjNCTWEwcFJWMjVGTWtoVWRIUXpjRGRoUkhSeWRVd3lia015ZG5RdmQyOTFlRUpYUlVoSlVYcFdXWGxPYVhSWlNEZG1keXQxUkZKUVptcERNakZGWlVKV1lXUTBiVVJUVVRoM1JHWlNaa0pxYkZaWVJXeFJiV012VkU5cU5FRjFjVWwyVmxONlMxSkhlV2x4WVUxWmNsRjNRVzF0S3pGcFdXODFWbEJCTjFGT2FrSnRhV2xIVjFWRFVtUkZVbFZoZWsxNk9FNXhZM0JHYlVOblVVdENjMlZHVml0dlNFVk5NbTgzUVVGcFkxSk5WR05YY1hWWVRrSXZhVzR4VWtwbGJXMU5hbEp5T1Vsd1RtZE9UelJGZG01SVlXaHllVTVIZWpjMlVtbENlbEpuT0VGT2FqSmpiaTlHUjIxa1VIaHdhVmhwYzBSdlduVnlSMWRTT1VrM1MyaHpWVWR0VmpOd1pFazBiekJJYTA5eFp5dFNlVGh2UmpVdllXaE5aRms5SWl3aWJXRmpJam9pT0RrMk5qSmpOR1poTXpka056RTJaRFUxTkdNMk0yRmlNekV4TkdRNU16ZzFaamMzTldRell6Y3pOakl3TlRkbFlXSXpPVFF3WkRnMVlXSmhOVE15T0NJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-the-preparation-of-port-state-control-inspections-for-ship-owner",
                "title": "Guidelines for the Preparation of Port State Control Inspections (for Ship Owner)",
                "docs": [
                    {
                        "id": "guidelines-for-the-preparation-of-port-state-control-inspections-for-ship-owner-pt-6-vol-9-2022",
                        "label": "Guidelines for the Preparation of Port State Control Inspections (for Ship Owner) ( Pt. 6, Vol.9 ) 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbU5oVUhaa1JuUkxOVEZzV0hKeVUwNXlTbEpLYkhjOVBTSXNJblpoYkhWbElqb2lZVzFQWjB4NU5XRlFWelJwTm1sSGNqSlBVR0ZtZFVKSFMycE1aakZ2TmxsS1ExWkJRVEJHY2podlFXWlZiVXBKYzBReFExcGtjRXhoVFhSVU5VbFpObEEyWTFSWVFsRlFaVTFuVVV0U1IyVlNaSGcxZEc0MFRGaHNVVWRFVmpkak4wbEVURVI2U25FelNtOWFOWHBYYmxWUE5sUXhhbmtyYm5jMWNEVlhURk5sTUdOb1FsQlVabkF3Ukhod1VFRk9aMU12SzBZdlVtcGpWMWRHYUVad2RHbEljekozYVVNeFFVWnBXVXBsVERSSlNGQkpkbk5pTWpsYU1WRm5TbWhzTTBaNk5rSlFNMFkzT0VWbFUwSldUWGsxVVVkM1FXSTRkblpoVWtsSE1tUlFTR2R5ZVdoM2JYUXZUM3AwWWtncllYQjNVQ3QxYVhnMVdWWlJWVTEyTUVkWWRIcEJRemhWY0RsdFJuVnZZVzlvYVU1Tkx6UldVMGRPUjIxaFdESkpjWGhCZFUxVmFYSktMMk05SWl3aWJXRmpJam9pTURBNE1URmhZVGc1TmpnNFpEYzVOR1EyTVRSaE1XRTVPVFpoTmpJME5qYzFPVGxqWldVNE5UY3pOVE16TkdRM05tSmlZamhqTUdJellUbG1OREF4WlNJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-on-crew-accomodation",
                "title": "Guidelines on Crew Accomodation",
                "docs": [
                    {
                        "id": "guidelines-on-crew-accomodation-pt-6-vol-4-2016",
                        "label": "Guidelines on Crew Accomodation ( Pt. 6, Vol.4 ) Feb 2016",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbGwwVG1adlRtWlhVVkJyY1VaTmRHZDZaRWN5UW1jOVBTSXNJblpoYkhWbElqb2lhMmhzVkdSQlJDOU5NV0UxWkd0cllXWkJTazVFVFZKTlVqQkJhVGx4UkZwVVdrVnFjbUV2UmpaV2NrMTFRemxoUjNKYVJUTnVlWG94ZDFnclJIQmlOSEpUZGtOYWNqaDJjMUJRTldObVJIWlJkVEpQUWtneVIxcGxiMUJNY1RKRVMwMUtPV0k0WlZBeEwxUlRiVTlqU25sWE9HOHhla2xMVW1Sb05VMW9iWGxCTVVsYU4wODVNVWd3VVRNeVRuUkhkVXRrVkZFeFRIaFdPR2hHT1VsVk5tMUJOMkpFVGk5TFZuQlJaWGhDUm5neFlXdERPWFJIYTNCT1RIWnpUWFY1ZUhkeFpsVk1Xa1pHVFhsSmRWRnBheTlDVVZObmR6MDlJaXdpYldGaklqb2lOV0UyTVdKaE1HVmxZemhqTWpOaVlXWXhaakJqTjJRNU5qWTJZV0kwWldNNVpUaGlOREV4TURZNVlqQmpNelU0TmpjME1qZzROV0l4WVRneU5tVXhZeUlzSW5SaFp5STZJaUo5&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-on-intact-stability",
                "title": "Guidelines on Intact Stability",
                "docs": [
                    {
                        "id": "guidelines-on-intact-stability-pt-6-vol-3-2025",
                        "label": "Guidelines on Intact Stability ( Pt. 6, Vol.3 ) Jul 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJamczWlZKUk1sQXdWamxCWWs5bVprNW1SbGhUUVhjOVBTSXNJblpoYkhWbElqb2lTV3d3VlVaelluTkRLekpWY1dKbWRYaHdRMVJ6VUM5RFZuaERjRE12VWl0RmR6VjRMMDlZYUZrME0zQmpNRkJGUkUweFUwNU1jbkZwTkdoVGRsWlhVM2N5WkRScmMxWk5hWGRuZDNGU1VWcHpRbVp3VTFGU1R6TkJjWGd6ZVc1RFdHbElhRlU1WWtkcVZrSjVSbTE1V0ZvMmRYcE9ablpSU0ZGQk5GUTRhMHRhVDB4WWVuUmpWbE5MWlhwMFUzUlJhbHBXUWpRMGQxazNNRTVyYkVGWU5VNUVTUzh5ZFRWNVpVSnpOREJWV0doSFUzRlBZV2c0WVVJM1JuVkhkVzlxYzJKeFRFSXhPWE55VWpCck1GUnNWRVZJVkhBeFFUMDlJaXdpYldGaklqb2lZMk13WmpJNE1EazBObU5pTVRFM05HSmpNR1ZrWm1aa05ETTJaREptTUdRMk5UVm1OV1kxTnpoa1l6UTROREl3T0RVNFpqTmtaVGszTnprME1ETm1ZaUlzSW5SaFp5STZJaUo5&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "petunjuk-pengujian-kemiringan",
                "title": "Petunjuk Pengujian Kemiringan",
                "docs": [
                    {
                        "id": "petunjuk-pengujian-kemiringan-pt-6-vol-c-2015",
                        "label": "Petunjuk Pengujian Kemiringan ( Pt. 6, Vol.C ) Oct 2015",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa3BHUVRkMEx6VlFhekl4YjJaSlIycDNUVlp4WWtFOVBTSXNJblpoYkhWbElqb2laVVp5TVZRdmJXaHRSWEF3V0dKUFFYWkdjR040V1hOTFpFOWlTRWhLV2tadFN6VmpiMjlEYlhKbkt5dFZjVUZNWkVsRGQyODJhRFp4ZFZsMGEza3dka3RMVlhkTU0yMWFNWGhGVm01clRYcENNVFJxYURCd09IaGljRUZUZWxwRU1XUlBTSGd5Y1dnNFRHRXpVMnRTTldkYWVWYzFOek14TlRjclMxUTJkbGQ1UlhodGRVRlpiSEEyWlZSTVVGQkVZWFZPWVdaRkx6Qm9XQzlrUzJWSk56RTBUbVJQVlhKQlFtNW1PVU01TjFaNmMydHpObTVLTlVFNFdXOXVPVmhzTlc4NFkzRlFVR1ZCTTBwVmQwMW9VRGhKUW5GUmNucEJNbWQ0UldSMlIySnZWRlppUVUxVVVuRkhUVUZZUmpaU2NtOW9TV1pWVW5Wb2VHNTVaelI0YUNJc0ltMWhZeUk2SWpRellUWmlNVGMxTW1ZMFptWTJOelUzWW1JMU56WXpPVEl5TVRZMk1HSTNaamMwWlRabU9XWmtOalEzTkdaak5UWTBaamxtTkdVMk9EbGpNREk1T0dNaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "rules-for-the-verification-and-registeration-of-ship-security-management-system-bilingual",
                "title": "Rules For the Verification and Registeration of Ship Security Management System (bilingual)",
                "docs": [
                    {
                        "id": "rules-for-the-verification-and-registeration-of-ship-security-management-system-bilingual-pt-6-vol-ii-2004",
                        "label": "Rules For the Verification and Registeration of Ship Security Management System (bilingual) ( Pt. 6, Vol.II ) 2004",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa1pzVDFkbFkwTjZVekJtTTJVdk9WSmFlRGg2VVdjOVBTSXNJblpoYkhWbElqb2lWelZpT0U5TmJIVm5NRGcyUW05NVNETlpkR1ZqTjAweU1qRjJXRzlNUm5CblRrdFllak0yVm1OSVZIbHFkV2xDUmtSU1ZucG5kSFZJZDFVMGNqZzVTbXRoYUdNeVRIQjFPRWRTYVZwYWNUSlBSREo2Y0hCeGFFMVFabE53WjNoSWF6ZElSRFY0YW1aNE9HVk1RMVphYUhaQ05FVmtia1JWYkM5SlVFbGFOMjlSUmpaM1RtbFdTRGxNWkRkaFdHRXljRlF3YkRoWVlsWlVkblo0SzFoMVlXaGhkak1yVTJweFFpdDNMemRFZFdwUGNuTlJNM2xvVFhkYVRDOHZaaTlzTUhJclExaFJSMlJWUnpsMWRuRkhNM05UTVhkdU0zSjNUVXhyZW1Sbk9FSnFNa1l6VUU5UVZHbEZUME5sY2xoTlozRm1jbXR4ZDJkT2NGTnFaMU5sVFRsT2JrcE9Ua3B0UkZGaGQxYzBXVUpaVmxaNlJqZDRjRWxFT1RZeVRFSnVUVmRFVDB0cFRIRndOV005SWl3aWJXRmpJam9pWlRWbFlqa3pORGhqTUdObVltVmtNbU5tWWpVME5UUXdOMkV6TldVNE4yRmxZbVZrTm1FMU9XWXlZMlZsTlRSaU1UVm1PVE0wWW1WaE5UQTVOVEppTnlJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            }
        ]
    },
    {
        "id": "part-7",
        "title": "Part 7. Class Notation",
        "groups": [
            {
                "id": "guidance-for-crew-habitability-on-offshore-installation",
                "title": "Guidance For Crew Habitability On Offshore Installation",
                "docs": [
                    {
                        "id": "guidance-for-crew-habitability-on-offshore-installation-pt-7-vol-c-2014",
                        "label": "Guidance For Crew Habitability On Offshore Installation ( Pt. 7, Vol.C ) 2014",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbEJSTW14Qk5qaEtZVkYyTTNCQmJrOWxXbWhITTNjOVBTSXNJblpoYkhWbElqb2lUa1JHY1ROME4xb3JlbWRPWVRocU9VeE5TRU5tTldaaVEyaHFjVU5GVWxJM01XSjJhMlJKWVVveVduTTBTREI0SzBObGRqUmhXVUUyTTBobGRtZFdVSEptYjBaRFEyRTVTMWROZWt4blYwczBOMjh4TldGaUwxUXhTbVp1V0M5NVJtRm1TMDlLWVdnd1lVSkpXbXRKY0RKWmRtWk9hMW92YldJMFUxUm1WbFpUYnpWdllXRjRMMGwxTkdaeVkxbE5XR2h1YUhOa1VVNWpSelJFYm1GTFFXWXlLeXR6TUZwTEwyNDJXVmxEVGtwMlJVNXNVR2g0TDBKYU9XVk5WR1JyVUVRNU1IcFdRa05oU1VGdE1qRXlNVkpVVjNkSk4yOTFZMVppVmxZMFQyNDBSRTlqVEdoSk4xcHZSMWtyWVM5UlRUWlpka2MxVTFBd05XeFFUSGxFVEc5dmRDOWxjQ3RRUTNCQmNYWkRlV1YwTTJsSFdsRTlQU0lzSW0xaFl5STZJamd3WldVeVpUZGhORFEwTXpaa1pqbGxZMlEwT1RVeU1HVTJNVGhpTUdOaE5qVmhaamcxWkdZeFpEaGtNREJqTjJVeE5EWTROVEpoTmpKa1ptUmtPVGdpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-crew-habitability-on-ship",
                "title": "Guidance For Crew Habitability On Ship",
                "docs": [
                    {
                        "id": "guidance-for-crew-habitability-on-ship-pt-7-vol-b-2025",
                        "label": "Guidance For Crew Habitability On Ship ( Pt. 7, Vol.B ) Jul 2025",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJalpEYm1KeWNubGxWM2tyV21abVYxa3pTVkJ3UTJjOVBTSXNJblpoYkhWbElqb2lNSEJaUmtOYWJ6TnJia3hUVjFJdmNVRlFSell3WWxrdldWRkZVM1l6ZFdGM09Fa3piMHBGWlZGd1RGVjFUek0zVDNVemJ6UnZWV3RaVG1sUVQyMW5ZV1ExUjBSaVRVUkdOMmRzYTBSclRFSXJVMFF6Tm1aalpVWlFXRGQ0WlZkbEszUjRMekp0V0dsUGRVNWpNR2Q2VGxGc1NucFROMEZHY25remVDOWxTemxLVkRCT1VYUTFialp0YkhOTlltZEtVWFprYzNBME1XMDNWSFptTkZSRVoxVkxhakJpU1hkMU1VMDRaVk4wUWxad1RUVjBLM0Z3T0N0bmVuRnFhemRPVkZvd1YyVk9lRzVuTTI1bWFETXhPSHBuVTJoQmNEaE1NVVYzTldjcmJFWlpiMFU1UlV4WVFuQnVaejBpTENKdFlXTWlPaUppTkRZNVl6UmhOV0UxTnpSbE5UazROVEExTW1VM01XTmlNRGt6TWpnNU9UVXlaamxrTURabE5UazNaRGhrWVdSa1lURTROak5oWkdJeE5qQXhNVEJsSWl3aWRHRm5Jam9pSW4wPQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-hull-inspection-and-maintenance-program",
                "title": "Guidance for Hull Inspection and Maintenance Program",
                "docs": [
                    {
                        "id": "guidance-for-hull-inspection-and-maintenance-program-pt-7-vol-d-2013",
                        "label": "Guidance for Hull Inspection and Maintenance Program ( Pt. 7, Vol.D ) 2013",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJak5aZW10bFprWnpMMmxFWm1ORFVTOXJhRE5VUjNjOVBTSXNJblpoYkhWbElqb2lOa041Y1U1MFkyWkxZakZDWkhKVVZtNTVaRkJtVjJweFFYaFJRVU5wYkZObWNIVkxPSEUxWW1OaGFIZHFhaXQzWVhSS2NXNU1VVFpZVkcxSFkwbHJhak1yV2xsVVRuTjNaVlUzU3pRMmRFMUlUV1JHTml0SE5UZEZXRWR1V1dkUFJrdDJVbGRZSzJabWJrSklSRmR5YlZkV1J5OXhLMlJ3SzB0RFRUTkVNMnhOYVVWdVdFMUpRVzFFWm01eWRtdHlNRGgzWkc1dlJXTm1SR1ZLWkc1eGVYTTVNa05ZWm1kaUwxQjZibmswVWtKNVJHUTRVazF4Wm01aldGSjBUVmRIY2tVNVVWRlJZVlZuYWxCd1F6WkRhMFpSUVVsRFQyc3ZlbloyTm1SNFNWVm9la05pVG1jeU9EUnVlblpvY2xWeGMzaFFPVkV3Y2t0U01YUXJWREE1WWlJc0ltMWhZeUk2SW1KaFpESTBZVFkzTkRneE5EbGtOakptTldRMU5qRmlZalU0TnpBME1EaGhNekV4TVRrMk0ySXdNREUyTmpWalltUm1aR0ZqTjJFeU1XUTVZekJqWldNaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-planned-maintenance-program",
                "title": "Guidance for Planned Maintenance Program",
                "docs": [
                    {
                        "id": "guidance-for-planned-maintenance-program-pt-7-vol-e-2013",
                        "label": "Guidance for Planned Maintenance Program ( Pt. 7, Vol.E ) 2013",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbVppT0ZkVFRXVllUSFJWVVZsS1dtRjVZalZ1YkVFOVBTSXNJblpoYkhWbElqb2lSVXR6YW5sb2VuVTJZa3d6V0dkeVRqRnlLMnB4Umpka05FaE5kSGxaZERKc2JHNVNVa3cxTWxobU1tMW1lVkUwZFdFemR5dHBhVVJ2U1RkcldscHhWV1l2UldSQlNuSlJSMnRYUkVkWE1reEhieTlNYkM5T2VuVklXWFZ3Y0RFdk5rWmpRVkp6VDJacFRIUktRVWxWUkRONWNXRnBVRTFGYVc5VE4wSndhRFJuY0VwWU9XRlhUMFJVY1hOR2MxTllRazFFYmxsWWRGRnlRWHA2VW1WSFJqWkZkakpwU2xSTlduZ3dhblZITVROc1FuSmhPRGRwUVc5SlVHbFFia0V5WlROaFYwd3ZOVmg1UVZWb1JFdENOVVZZWTBkMVZWVXJNRFZNY0ZCR2JUaE1UR3hYY1VaUWFHUjJVVDBpTENKdFlXTWlPaUkxTWpVd016ZzBPREppTURjMk4ySmlZVEUyWldGak1HTXlPRGhrTldJeVlqVmlOVFJtWVdNeU56VmhZekprT0RJMFlUazJPRGMyTXpGbU1UTmhPV0V3SWl3aWRHRm5Jam9pSW4wPQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-survey-based-on-reliability-centered-maintenance",
                "title": "Guidance for Survey Based on Reliability-Centered Maintenance",
                "docs": [
                    {
                        "id": "guidance-for-survey-based-on-reliability-centered-maintenance-pt-7-vol-i-2012",
                        "label": "Guidance for Survey Based on Reliability-Centered Maintenance ( Pt. 7, Vol.I ) 2012",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbnBGY21SclYwTlJPRkJZU2xsU1JEUklVRU5LZUhjOVBTSXNJblpoYkhWbElqb2lUVlJ1TTJJMWIxVkJaRlZrYzJOdGNTOHpSM1ZFT1dKdlptUlJka2R6WWpoc2NYQkNPV3dyU1dWMVRHdzVVSFY1TldOQ1J6WlJOM05FUzFSS2JGSm9kMEozY1hOT2IzRktVVUZ4TUZrNE9YUkhjSFJNUlc4dk5XdDRhamRoVHlzMk16QTFPSGx6UVROb2QxSTNlbTF2UjA1dWIwZGpkVnBIWWxKc1VHdHFibEV3U0M5MFVrcExLMjlGYVROV2NqaFRZVlExVWl0NEx6UjFjV0lyWWxFMmFraHdRMk5SUVRsTlYwSXlRMHhyZFdJdlRHMUdXbFJTTWs4NVUxaHJNVzVMUzJkeldYaE5NRzV6ZDB4aFFrWnNUMmcyUnpSd1ZWazBRVmw1ZHpWTFRVcHdhMkl4UkU1d05FZGxTbEZVZDFWa1VtbFZOMHhwVFhWVFRpODJWMjFFUmpsU2RrTmllRXg0ZVRoTmNrbGliWFJtT0VORGFXSnFSV0Z2Tm5jeldWWlpZbFZXUkhKUGFESkNMMEU5SWl3aWJXRmpJam9pWkRRME5XUmpOalUwTW1GbFpERmtaV013TkdKbU9XVmlZakptTWpRd00yUXpPVFl4WkdSaU1qZzROamd5TlRObE56ZzVOVFV6T1RZeFpUSTBPR1V4WkNJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-the-class-notation-emergency-respon-service",
                "title": "Guidance for The Class Notation Emergency Respon Service",
                "docs": [
                    {
                        "id": "guidance-for-the-class-notation-emergency-respon-service-pt-7-vol-h-2013",
                        "label": "Guidance for The Class Notation Emergency Respon Service ( Pt. 7, Vol.H ) 2013",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJblJLY21sQ2FFczVORVJXWkRSMlRUQTRVbUZWYTJjOVBTSXNJblpoYkhWbElqb2lWVVZpVEU1bFIxWkhNRk5NVTBoWVlYVkpTR3BtSzBaMWRuaFlTWEJOWmsxR2JEVlJjV3gzY2tKM1VUaHRjWEJWTlZaSE1taGFjMEp1YzBOMGJtZDNjRzh2VlU5SVVXODRWVGgxUmtkYWRtOW9aR1puYjIxR1UwNHdhMWgxVVZCTVlVeEdSaXRLZVVKUWJpc3ZiVEpWZW1WUlZqWnBaa0p5V2xOUFRrUkpWVVIxZFVvd01IZFlZV0pHVTFsNEswUTVhR3hFV2xsRGMwUk1RVTFvTmtSYVVsUjFOM2xqVFVWa1pUWkpReXRYSzJ4dFZEbFZRV1ZMUkVSUFFUZGlTVFpaVmsxaVlqaHViblJ0Umk5Q1RDdERTRTVTUzFrNWMzZFRWRFpJT1ZsT1NIVlNVR05HWW5sUFdVZGpZMWRUU0ZSa2RFOHZVRTFWVkRadVNFTmxZMVU0TjFWRk1tUnlOWHBOZEd0NVkyNVhiMk5CZDFkd1ZHYzlQU0lzSW0xaFl5STZJbVF4Wm1JMU9HTTNORFEwTlRneE5UWTBObU16TmpCbFlqSXhNMkl3WWpRME5tRTJaRGM1TmpKbVpUWmhaakV3WTJRM01qVTBPVGM0WTJJNFpXUXhZVElpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-the-class-notation-helicopter-deck-and-facilities-helil-and-helilsrf",
                "title": "Guidance for The Class Notation Helicopter Deck and Facilities (HELIL and HELIL(SRF))",
                "docs": [
                    {
                        "id": "guidance-for-the-class-notation-helicopter-deck-and-facilities-helil-and-helilsrf-pt-7-vol-a-2013",
                        "label": "Guidance for The Class Notation Helicopter Deck and Facilities (HELIL and HELIL(SRF)) ( Pt. 7, Vol.A ) 2013",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJaTlqYzNrMFkwdEhRVTlFUkZOQlltMVFZemhRUVVFOVBTSXNJblpoYkhWbElqb2lhM1U0YjNKRFdtY3lNblJNYzBwTVFUTkpNREZPZFdWbmVEbHJOV1ZGVW1GVlMyWlRSek5VU0hkaFkwd3phbWR1UlhSNU5qaDZiMmRRWkdvdlkxWkRXVE5xTVZKb2NVWktSVFZDYjBWNE16VXdWbEJEUTBFMVVrMWpkV05PZERSTE9UaGxNWEpDZEhGVmVUTkJORmQwTlZVM1ZGaE1WMkZ2VFdWa2RUQlZZMFZrVlRGWFRHdHVRbmc0V0N0Vk1scG5NQzlZVUcxMlp6bHBVa3h5WmpsM2VXSm9hMG8xV1RSMk5FeGljMEpSVFN0WlUzaGFUV1ZTUjNkSU5VMDFSVGhrZFRZdmIwOVljV0ZOV0hGS1ZuQkZLM2g2TmxONGVURkZPRkZ1Y1dNelZuTklabmszVDNsV1FXcHJTVXRMTW5seFRHUkRXRGRsT0VjeVlUVjFXbTF4WmpFMFlYTjBVVGw2TjI5dlZXVTBkazFtU1VWNVkzZDJTQ3RKSzBoaFNIcHpNMkUxVGtGNmRFRlNkVXBtWmxSU2FVaDFWMEpaZDI1NlYwOVNTMVZCY0RjaUxDSnRZV01pT2lJME5HWTJZVFZsTWpjeE1UTTROakUwT0Roak1qQXdabUZpT1dNd01XVXdaRGs1TlRnM01qRXhOMk13WVRBMU1qQTBZV1k0TURJNFl6Y3lZbVUyTmpaaElpd2lkR0ZuSWpvaUluMD0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidance-for-the-environmental-service-systems-for-ships-of",
                "title": "Guidance for the Environmental Service Systems for Ships, Of...",
                "docs": [
                    {
                        "id": "guidance-for-the-environmental-service-systems-for-ships-of-pt-7-vol-f-2013",
                        "label": "Guidance for the Environmental Service Systems for Ships, Of... ( Pt. 7, Vol.F ) 2013",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbU41V2tkNVZrWTFhRUpvTWpWUFUwdGhiRzlHYUZFOVBTSXNJblpoYkhWbElqb2llR0p1U1dSdWJuWk1kSEJEWWxwSGJsaElaRWxtWlhGYVIxZEtSVVJGZEU5U05reHVSbVZWYUhoMWMySlRXbmhOZEVKRFZVSXJOMGs1UkU1Q05HMDRkamx0TTI1U2NVcHFLMm94TURORFNIRkxSME55TkVwaFJXRXlkbk5MV1RKalVXNDFZa0pJU1NzNGEyMVhaMjg0VWtwQlJISk1ZVGhtVjB0aVRIQlROWE5KVXpSME5uRnZUemRNTkdkNllWZGpkV1F4UVVFd0wzZHZOMDlRV2xWUk55dHlTRzFOV2xkd05DdHFNbU4yUVVWWFJTdGxObXRFVXpWeFZVeExabUZMU0RGemFuWm1jVEF5TlRCd01WaGtXSEUzVm1OUVZGcEhWQzlwTkVOalYxWTJZbVUxU1VwSlNWbGpNbFZQTDA5MmVVeHdhVUZCZDNKM1lVVXJiV0prTjJGRU1VbENkSFZDWVhGRWVYSnFPVE5FZVZSSGFFcHhMMWhXUXk4MFoweENXamRNUzBaMFdVNUdLMUU5SWl3aWJXRmpJam9pTWpBelptSTFOV1U1TW1Fek5qZzJZVEU0WlRSbFpUZzJaams1WlRRNFltUm1OMlZrTnpCaFlXVmhOalZqTmpJellXWTFOR1UyWlRGaE16RmxPREJpTmlJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-certification-of-lifting-appliances",
                "title": "Guidelines for Certification of Lifting Appliances",
                "docs": [
                    {
                        "id": "guidelines-for-certification-of-lifting-appliances-pt-7-vol-1-2013",
                        "label": "Guidelines for Certification of Lifting Appliances ( Pt. 7, Vol.1 ) 2013",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa0pEYmtsbVJTdDNlWFJwU0VWQ2RERm9kRVozV25jOVBTSXNJblpoYkhWbElqb2lieTk2UkVvMlluQlFNbGQ2VVdKTkwxaEVSVlpVV1ZkTE4wZHpjV2x2UVV0dWJXcGFUblY1ZG5waWMxRldiRzFMZFZwaVVHOUdOalZYZWxBdlluTTBPRkJKTjFaVVdXUjJUMVI2UzNRcldETnBaVVF3T1d4eloxSlRlakZDTmxOQkt6VXZlSGh4Y1V0RFNHTlBRbXhGUTBWWFEwMHdSSEEyZVU5SlVHZzBlaXMwVlZJNVRHUXlhVnBYZUU5T2RHVTFhVVpPTVZSNVpXcDBiMEZxUzFGMlUweFFhRlJPTTBaTFNVMXVObFJzYmxGNFlVNWhRMnRxVmtoTE5XMHpXSGRFUmpKbFZuVnlUMlpVTlc5elozVk9TVXh6UTFoVFNFbFdTMXBGVDNaT2NXWkNkRlY2TmxJME5VRkZiMDF1UkhKMlRVWXZSbXgzYjA1clJXRk1WbUp5UmlJc0ltMWhZeUk2SW1FeVlqZGxNalZpT0RJMlpETTNaamRtWmpKbE1tRTNNVEl4TXpJM1lqVm1abUV4TkRkak5HVm1OekkzTVRCaE9UUmxObVZrT1RCaE1qQXhPV05tTm1ZaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-dynamic-loading-approach",
                "title": "Guidelines for Dynamic Loading Approach",
                "docs": [
                    {
                        "id": "guidelines-for-dynamic-loading-approach-pt-7-vol-2-2013",
                        "label": "Guidelines for Dynamic Loading Approach ( Pt. 7, Vol.2 ) 2013",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbXN6U1ZOcEsybzRjbFE1V2pFNUsxZE9iSFk1TUZFOVBTSXNJblpoYkhWbElqb2lSMlpVTmtka00xQnpOVVpNVEVkVU5qRmlOVVF6ZFZWcE5rZ3llV0pzYWpSbGN6VktWeXR0TTBaa1dXVjBVWFIwU0hGTFdXMXJNRzR2Wm1seU9FbHlZVzVtVjBoWmJUWkpaVmd5V2pOc1ZrNUdOSE5PYkdsSWFUTmtTV0pWWnpWNlNqRllVRmhMUzFCSVJXaG1ablJFVWpZcmJ6UlZaVTVXVlZsMFZWY3ZVVE5rWm5wUWNFWXhTbXAxYkV4S2NHSlFjRlJyWVM5WWJIcHdUVmhJVUdrckwzSndOa3B5VjBoUU9UVnJTM2c1THpSek1WbEZRakZyVkRGWFNVNUNjMHA1TDNKbVdYTXJTeTl6VUZab1l6SnFaRzFSZVN0dmJuVmpaMUkyZUZNNVlrOVVhWFJGYzFJM1QwNXpORDBpTENKdFlXTWlPaUpqWVdWbVltUXhZVFEwTWpJNVlXVXhZbVZrWmpjM016RmlNVGhtTnpRek5qWmtaV0kyWVRGaU1XWXdZVGd6TTJVMk5XSTRZV014WlRnNU9ERmhaV05pSWl3aWRHRm5Jam9pSW4wPQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-livestock-carriers",
                "title": "Guidelines for Livestock Carriers",
                "docs": [
                    {
                        "id": "guidelines-for-livestock-carriers-pt-7-vol-4-2015",
                        "label": "Guidelines for Livestock Carriers ( Pt. 7, Vol.4 ) Jan 2015",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa1IzV0hkS05teExWRWRVU1ZONGFsaFROMjlvU21jOVBTSXNJblpoYkhWbElqb2lMM0ZHTTB0SFFTOVpVWFpEZW1sV1ZIZENMMk50VkdNMmRGQTVOSGRPWkVsUWNXcGtLM1F4V2pOaVRVOHhSSEZGY25BNFJuVjBWMEp5ZEdabVYzbHNjRk5TVVZCMVFsa3JVa2xJV0VadFdHbzJVRWRIYW1oSFZYcFNZMjVsV201UlMwbEdURU0yYVhWRlEyaE1WbVJPUkRWa0szaEhTR2g1VlZWTU1sVjVNR2gwYldGaFJYWmlZbWxSYTNOTmQzaHlOblJXYm5wWVRIbFFZbmRQTVhZMVNuVTVabFUwU0RWbmJYRnBSaXRvUXpsSFlsWmFTMll4ZURsdVowcFJlR2xrV0cxdFZrWkVSVVp0SzFad1FsQXhTRWN5ZVM5clVUMDlJaXdpYldGaklqb2lPVEEzWldFeVpEbGxZemczTmpObU1qY3lNMlkzTlRobE0yUm1ZelprT0RnMFpUWXhOemswTmpJNVl6TTNZMlF6WWpRM05XRTFPV1ppWWpFNU16UmxZeUlzSW5SaFp5STZJaUo5&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-spectral-based-fatigue-analysis",
                "title": "Guidelines for Spectral-Based Fatigue Analysis",
                "docs": [
                    {
                        "id": "guidelines-for-spectral-based-fatigue-analysis-pt-7-vol-3-2013",
                        "label": "Guidelines for Spectral-Based Fatigue Analysis ( Pt. 7, Vol.3 ) 2013",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbGhHT0V0VFNYTlNiakpZYkdJMWJrdE9XQ3RyYmtFOVBTSXNJblpoYkhWbElqb2lkVVJJY3pGYWRrcHVNbVJYVUhsR2FXMXlUbk15VkVaUVp6TlNibVZsTW5WM1JrdzVXbk52U1VWSlNHWm5PRXhGU2xCQ00yVlROVE5hY1hKTVdVWlRSV3AzUmtSU2NsTlBXbFYyY0ROSVEzRjRkMGw1WTJsd09VZDFNRkpGUVVwV2FFc3pjMVpDZEhGcGVrbHVTMWd5UVRKa1pIQnVaaXRUYUd0VE9VWlRUVXBMYVVwWlJrNVBSMlk0S3podFFtNUtObkpWT0ROellrZEdRazVNWmxwUlMwZGlkMDFpZUV0VllqWmhUekZCUTJaWksyUk1XRTlJWnpoeFJXdG5jM0JYYUVjNWVFdENRMUY0VG0xYWNTdGlNMkZQZUN0a1NHbHFaVmhRZGt4MlJqTTJUVXBZUkdaa2MydG9la3d2ZEdwSmJFazJibFkyWW5SSVNIcHBZaloxVnlJc0ltMWhZeUk2SW1Wa09ERXhOMk5sT1dabVlqY3haakpqWlRaaU5EZzNOamxtTURreU0yRXdZelUyWmpsak9UVXlabVEzTjJFME9HVXlOakEwTTJZMk9XVmxOakZtWVdFaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            }
        ]
    },
    {
        "id": "part-8",
        "title": "Part 8. Domestic Ships",
        "groups": [
            {
                "id": "pedoman-kapal-sungai-dan-danau",
                "title": "Pedoman Kapal Sungai dan Danau",
                "docs": [
                    {
                        "id": "pedoman-kapal-sungai-dan-danau-pt-8-vol-1-2022",
                        "label": "Pedoman Kapal Sungai dan Danau ( Pt. 8, Vol.1 ) Nov 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbXhXUWxsV0syVjVWblJuV2xGSVRIWnpiVEI1TW5jOVBTSXNJblpoYkhWbElqb2lMM1pSYmxGelZuVmxZMUIyTkdsVlZUZzFlbGxTUTNWQ2NXbFlaRkJLTjJsemJGRk5ZV0Z1TkV0cmIzQTJXV1p2TDNOeFVWQkVVVFZ5UVdsME5sSXJaRmN2UVZCdmExQkZiWFJQYm14blNpdGtNMGRtZVVGUVZFNXpZMDlEWjA5bFN6aDNNV2RoS3pKamNuQndWekJPY1dGRlRtYzRWbU5TUTFsUE56ZGliRlJTT1haT0wyWnFOR0Z0YlhoMVpVc3ZNRmxYUzJOalNGUlBLMnRDU2t4eWMwVm5jQ3R2VEhkamJrZFRXbTF5Um5OcGVHSkZMMWhPVnpSRlRHNUlhMU13SWl3aWJXRmpJam9pWWpJeU56QmhPVGszTmpReU1UQmtZamhsTkRobVpEZ3lNell4TWpVNFpqRXlOV1kzT0RKaE5ETTVNamRoTWpWa05UUTJPV1F6TW1JNE5qRmlNMlpsTUNJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "peraturan-domestik",
                "title": "Peraturan Domestik",
                "docs": [
                    {
                        "id": "peraturan-domestik-pt-8-vol-i-2022",
                        "label": "Peraturan Domestik ( Pt. 8, Vol.I ) 2022",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa1poU3psMVVEWnZjelZSVjB0TWVXNVRNRmRTWTFFOVBTSXNJblpoYkhWbElqb2lkRllyUlVkelRGQlpPWGMxWTJjNVIyNXVTalE0Wmsxd2IwSlJaR2hFYURZME0wVjFibmN4Y1doM1FXWnVSRTVrTkhacldqUkhjelpqWW5GU01FTjJNQzlJUmpKWmRFNDNUVEJGVkU5c1dVcExSRmxvZWpBclVqTm9RVEJIVmxGelIweEhSVTFhY1d4aFFVMTNUak0zUkRKVU1XZHBSRE5CVkdSVU5tNTFhMkZ6WVZJMk1Ga3paVkEyZW1RNWQwZFRWMDByYVhBd2FqbHVVVzFZYnpSMFJuVTFVWFpvVHl0Mk1VRkpQU0lzSW0xaFl5STZJak15WWpBeE1XRmhabU0yTkdRd05XWXdaall5TnprMU9XSXhOelE0WmpReVlUWXpPVEkxWkdRek5XVTFaRGc0TWpReE1USmxaVFZrWkRGaU1URmhaVGNpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "petunjuk-penilaian-risiko-kapal-domestik",
                "title": "Petunjuk Penilaian Risiko Kapal Domestik",
                "docs": [
                    {
                        "id": "petunjuk-penilaian-risiko-kapal-domestik-pt-8-vol-a-2023",
                        "label": "Petunjuk Penilaian Risiko Kapal Domestik ( Pt. 8, Vol.A ) May 2023",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa0pVZW1ReVdHRkNRMjVLVDBSeFVVbExTMmN3TjBFOVBTSXNJblpoYkhWbElqb2lNbGhEWW1zMk1YaFhVM0F3YkVoRVpHVnhka001WW5KcU5uSlFlbFJZV0dRd1IybERTelkyZWtJM1UySkVXVEJZVFhaemVtSnhjMmR2UTFGaU1VSkhPR2xZTjBOS2RqQnlUMmRsUlZCelpYTlRNa2xVYkVkTE1YWk5TakZOVjBSRU9VNDVXbWx6UWpKcVVtdDZZVFpsV0dwMFFqSm1TM2hTTVZSSVpVZHhSVVpCSzNSTVdEWkNkelpVWlhNMFpqYzViM0JoWkRWMGJXSmphRFZhTW5OQk1HMVpVMXB2VmpCM2JHVldUMmxzY2l0d1pWVk1UVWhXU0RCU1VYTllOVkFyTW01Wkt6aHFTM0ZoWjNKM2JFSkVZbFoyYnpWMk9WVndaRlY0VVVzdlkyMHhaV2xOVUcxeFV6TkNjejBpTENKdFlXTWlPaUptWmpKaU9UQmhabUV6TldJMlpqVTROVGhrTURVeE5EUTVabU00TldabU5tWmxNbUl4TXpsa1ltRmlNVEJpTUdVME5EVTJPR1EyTW1NNE1tUmhZemcySWl3aWRHRm5Jam9pSW4wPQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            }
        ]
    },
    {
        "id": "part-9",
        "title": "Part 9. Naval Ship Technology",
        "groups": [
            {
                "id": "guidelines-for-automations",
                "title": "Guidelines for Automations",
                "docs": [
                    {
                        "id": "guidelines-for-automations-pt-9-vol-7-2020",
                        "label": "Guidelines for Automations ( Pt. 9, Vol.7 ) 2020",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJakI1YlZWTVZWUlhaRmRCT0hVclVUQlVaaXRqU0VFOVBTSXNJblpoYkhWbElqb2lWVVF6TldGSGNVUlBaM05ZYm1kdmJUaGFWblF2UTBWMGVHNXZRMWxyZGpsUmJXSmtWbXBIZDJkb1YyVm1keTg1TXpaeloyWkhabWh0UTFOeVNVZ3ZVbGN5Y0ZwbFEweFpkVW96Vm5kWE5UZG5NRk42ZFN0TWVrVmlUVXR5WVhCMWMxbExVMUpSTkRVd1FsSTNVRlEwUXk5MFRHUjBWVEp0V1V0Q1YyUmpUakE1Um05U1dXRllXWEJqYW1Zd2MwRkhZelJKY2pWSmJXVmFia3htTlVJMFdtdElTRkJzTWtocFVXeFlNWEpzZUVOM2JXbEtZM0ZTV21jM2VXSnVSRzEzYlVab1kzbzNaM2QzY2lzNFNXcERRVzFxT1VSU1p6MDlJaXdpYldGaklqb2laVE14T0RrM01qRTFPV1ZsTlRVeU1ESTBZelJsTVRJM1lUSXdNREV5WldOak16STNOVGRrWWpsbU5tTTVNRFppWmpneE56QXhabUU0TkRRd01UWmtZaUlzSW5SaFp5STZJaUo5&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-classification-and-surveys",
                "title": "Guidelines for Classification and Surveys",
                "docs": [
                    {
                        "id": "guidelines-for-classification-and-surveys-pt-9-vol-1-2020",
                        "label": "Guidelines for Classification and Surveys ( Pt. 9, Vol.1 ) Jul 2020",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbmcyZGt4V1NtVTJVRGxtZVcxaWRGQkZjMlJpVEZFOVBTSXNJblpoYkhWbElqb2labGxCVjBjNFZXZE5MMEZwUVdoSFp6RnZiMnRYZW14cVJuUnJjM2RXV0Rsb2NHWnllbU0zWlhFemFHeExhQzgwYm1WdVZXNWlNRVJ5ZG1zMFREQmxVbFJ3WW5BeWVGbHNSbllyU0d3eFpERndWRGRHU0RWTVNWSmhNbVUzVVhKRU5XNDBMM1V5TUZFNVIxaGxTMFJRVTA5SWMxWXdVM0V6YUVVcmNpODNZMDl2UnpSRmJtUkpNV0ZCVjFSbFkzbHFNMXBSV214cmJuSlllRFJLYjBwTlFUWldMMmRUVmtoRFQwSmlRVTU1VDBOdmFYbElVRlpWUmpWd2RUTmhUV2RrTkc5VFZEUkNkVEJ3YVZkSmVXVjFXVUpKWm5OdmNXRkJNbXhYYjJzNVRtUXliRTFaZFZwUk5UTXhaa1p4VGtFd1dHVnBOakJsZGtKS1pYb3pkalZtWlNJc0ltMWhZeUk2SWprek1EazJOR00wWkdNeVpEazRZelV6WlRkak4yVTFaR1ppWVRrelptWmxZV05rTXpFMU9UUm1PREF4TW1ZNFpUQmhNMk5qTTJFM01XVXlOVGM1WXpraUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-electrical-installations",
                "title": "Guidelines for Electrical Installations",
                "docs": [
                    {
                        "id": "guidelines-for-electrical-installations-pt-9-vol-4-2020",
                        "label": "Guidelines for Electrical Installations ( Pt. 9, Vol.4 ) 2020",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa0Z3V2tGYVNHWnJORzl2Um1GbU1tMWtXbWxSYkdjOVBTSXNJblpoYkhWbElqb2lRVGR2UjNsUmNFbDFURUZJZEZvMFIwSXlhR1ZET0dWaFdETndkMWxVUlVGcFdEa3lSbE5NWlZkRVlrSldXalJJV0UxelYyUnNSRmxITDJoaWFVTnpOVTlQWVRCMVJFTlVjRE5aTkRrdmVWbGFNQ3RETnpsVlFTOVlhWEEyYWt0Q1pIaFRVWGN6ZGpWa1ZGQnRWbmh2YVRNMWRHWXdWSGg0Uldkc1ZHTXZVSEkxVWpBM2VreE1TRk51VTFkR1IwZzRZemwzV0hKNU4yNUVZbE5WZGxkWFkzRjRXRlp1UlRaTWNFaGtkbEV3ZERsTWNUQldibkJhWWk4dlVIUkdia0ZhYmpkSlVUTkpOR3BUVDFad1RIWldTM2RMVVVsbk9ESjFWMnBVWTJaRkx6VmtUV0oxVFM5MlZEWnlRVDBpTENKdFlXTWlPaUprTm1SbVkyRTNaRE13WTJRNE5qazJPVE15TWpkalpUUXhNVEExWkRkak1tUTRORFk1TldOaE1ETTRObUZpTW1RNE1qQXdPRFJpWWpGbU56azJPR1kzSWl3aWRHRm5Jam9pSW4wPQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-hull-structures-and-ship-equipment",
                "title": "Guidelines for Hull Structures and Ship Equipment",
                "docs": [
                    {
                        "id": "guidelines-for-hull-structures-and-ship-equipment-pt-9-vol-2-2020",
                        "label": "Guidelines for Hull Structures and Ship Equipment ( Pt. 9, Vol.2 ) Jul 2020",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa3BFVlZONVEydHBMM0J5WWpKVVNVOXFTMEpFVkZFOVBTSXNJblpoYkhWbElqb2ljamxzVFhwdWRHVjJlamx1Y1hKQ2QxaG5halkzVkRkSFdYaDZTVko1T1M4eGJXUm1Ta1V5ZWxaUk1YRm5iaXRwWjI5eGNuSlVhMHMxYmtwQmRYWlpPWEF2YVVKaWQxZEJPVkZTYmpWaWFHVnBiVVE1WkdWeVZFdFllRkl6ZDNKSFJrTTRUMmhoVEdSdGJtZEJUeTl3TVdjNFN6azVOR1JhU3poQ2RFNUVTa0pWZUZsa1ZXaERRbVp0YldkR1QyRmxNVkpYV2pVclRUZHhaVXBoVnpSVlNGWTNaamxEVUUxUE5FZFlUbGhhV2tGWlUyd3ZVV1V3TlVScE9UZHlkVXhMVVN0clQyOU9WMjl1U25ST09HbEpja2Q0VVVsTldqWTJZelpDY2xoVU5qRTNkM1JqTjJ0RWNFUjRNVlJZYkU4cmN6WjNkRVpDUjFOR1VDdDFkVzF1YUUxRWFFdHlRMHhZYW1weFJ6azRXRWxPWlRCMlMyYzlQU0lzSW0xaFl5STZJamM1TUdFeE5EQm1ZbVF5WlRFNE1UUmlaRGc0TmpFeFlqSTJOV00yTWpCa1pqRm1NR00zTVRFNE9ERm1Nek5oWlRObVptVXdNREkzTnpCbU0ySXdaamNpTENKMFlXY2lPaUlpZlE9PQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-naval-ship-materials",
                "title": "Guidelines for Naval Ship Materials",
                "docs": [
                    {
                        "id": "guidelines-for-naval-ship-materials-pt-9-vol-5-2020",
                        "label": "Guidelines for Naval Ship Materials ( Pt. 9, Vol.5 ) Jul 2020",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbWRIY25ORWVqSkxUbGxvVjFOelZIZEROVlZtTkdjOVBTSXNJblpoYkhWbElqb2libUZsTlN0amVFMXRVbG8yWkdsU01raERkbUpRWTNaQlJqQm9VVGRoTW14dk16SnBNa1J0ZFd4c1UxTXpkemxxVDBOUFdUQkdaMlp6Tm1KaEwzbFhjRmQyT1d4ekwwRkViVUpMT0ZkUlZHMXFhVFpQTmtkWE9XVlBaVXMxY0U5RWMwNUxVRzVCYVhwdVVFOXpZbXMxVlVOaldDOW1ibmhoZDNSdlFUQkRWbTEyWlU1TWJHWkplRFZuUTFCQlRHRkJWbE5PU0dKMGFHdFhUalpaTnpKaE9UbG5PRzVCU2tGMFpYTmpVeXRWUjI5dk0xYzFkekZsYVU5c1ZGSlBZVTkyYldweFQzWnpWRmszVTBscGJ6UlBjMVYwTW14eVoyUXdOMDlGWVdocFpqSk1ZVk5FS3pZeGJWSXJSVDBpTENKdFlXTWlPaUl3WlRjNFltUmlNVEV3TkRFMU1Ua3hPVFEwWm1aak9UVTRNV1pqT1dZME9HSTVNMlpoT1dJMVl6WXlaV0k1TkRRd1kyRXpNR1kzTldWbE1qQmhZak0zSWl3aWRHRm5Jam9pSW4wPQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-propulsion-plants",
                "title": "Guidelines for Propulsion Plants",
                "docs": [
                    {
                        "id": "guidelines-for-propulsion-plants-pt-9-vol-3-2020",
                        "label": "Guidelines for Propulsion Plants ( Pt. 9, Vol.3 ) Jan 2020",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJamhaZWxrdll6VjBlRkl6ZEdsU0sxbGFiWFphTlVFOVBTSXNJblpoYkhWbElqb2lMMmQ1V1daaGNtZ3dkbk54V25CTGRrTjRTRzFEU1VSblVTODNPR0puVFc4clFTdEJOR0ZUUms5dFZIa3lTMjlRWkhBMVVFdExSVUp6YnpoSFdEbG9aakV3Ums0NEwxUTVMMGhtUmtrck4wSkNVVXcyZWxOaVNtSkVWMUVyTUVsblVXSjJOMVJ3ZDNVNFlVOUNOV3R1ZUc1bmNUWldUMGhFSzFnMlNtczVVMDlzV2pRekwzSkZObFZyYTFWS1RGcEZMekprY2xGa1F6SjJZVGxFUmxkRFlVZE9kR0pwU2tkdmJITkxibTFZWkd0V1RrUmljVnBWWmtWTGR6aENSM1JOWWxsamQzVXhTMWc0Ukdad1VraEJhMVV4TTFSQk1FVktZa2hZTVNzd1RYZDVRbnBLWlcxRmJqZERZejBpTENKdFlXTWlPaUppWmpReU56ZGhZVGcxT0dObE5qZzBPR1l4TTJNM1pESTBOVFl6WVRsbE4yUXhaVEF5WWpJMU5UQTVNbVl5TmpZeE5HUmlPV0UxTWpNM09UYzBPREkwSWl3aWRHRm5Jam9pSW4wPQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-ship-operation-installations-and-auxiliary-systems",
                "title": "Guidelines for Ship Operation Installations and Auxiliary Systems",
                "docs": [
                    {
                        "id": "guidelines-for-ship-operation-installations-and-auxiliary-systems-pt-9-vol-6-2020",
                        "label": "Guidelines for Ship Operation Installations and Auxiliary Systems ( Pt. 9, Vol.6 ) Jan 2020",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa1Z2UW1oc05sWlRObVpSV0Robk9URnJMME0wYm5jOVBTSXNJblpoYkhWbElqb2lkMHhIUnl0UFIwSmpUMVpxVldaVlFXWlZWME4wVDFwVk1FZDZSSFp2WmxwME5VUXhUMlJJVjJvNVRrVTVVRmRsYzBJdmN6TTFWRXhXVlNzck1TczVkalpHTUhOd2VGSTBPRzV1U3k5SmJGcE9TMGhDVUhsR1UzVlRUbmhMTkdOUVVVcFJaakZEY2xKc1VuWldTRTlNV2swelQwOXBkVFJGUkZjMWJYWnRSMnRKVkZOV2JVdHlXRmwwWmxoTFRsWlNjVkZxYTFocFpuaHRUVEpZTmpoUFFrODNjRTV6UzFCNE5rdE5SRGxGUjBSdk5tcEpWa1phY2tkblYzRktjVXBRUkdWaE1UUkdjV1JXYkV0blNrdGFiMDlrZVVkd09Hc3dhelZEVGpkcmR6UXZUMU5KTTFGRk4wRTJUVFZXWnpSSlFtTmxiV1l3ZUhaMmVHUlJiSEkxWjBsRk5HMHdaV1Z3ZGtKaGRtOTNRalZKVEdwamVqbE5XVFZPWlZad01YUm9NaTkzUVVsUWEyaFBVakJIU0RkRVpIbDVaR05xZGk5U1dFNURXV0ZWT0dJaUxDSnRZV01pT2lJMVpHSmtOMkV6WXpGa04yRXpNMlUwWmpFM04yRmhaRGxtTkRka01qWTRNelkxTUdObVlqZ3daR0l6TnpVNU4yTTJPRFU1WkdFeU1HRTFORFV6T1dVNUlpd2lkR0ZuSWpvaUluMD0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            }
        ]
    },
    {
        "id": "part-10",
        "title": "Part 10. Industry",
        "groups": [
            {
                "id": "guidelines-for-medical-hyperbaric-chamber-facilities",
                "title": "Guidelines for Medical Hyperbaric Chamber Facilities",
                "docs": [
                    {
                        "id": "guidelines-for-medical-hyperbaric-chamber-facilities-pt-10-vol-1-2020",
                        "label": "Guidelines for Medical Hyperbaric Chamber Facilities ( Pt. 10, Vol.1 ) Jan 2020",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbTVRYlcxM1EyeG9UalF6TVhWQ1ptRmlSM0pYVFZFOVBTSXNJblpoYkhWbElqb2lTRk5IWWxJeGJsTklhSEEzV21SallWcGxkMHRrUVhsSk1GRTBjV0pZWmtSVU55OUpjbXBZVlU5TFQxRndiMVJUYVhaTlRrVlliRlUzWTJ4R09EaElMMnhJV1RkV0wyUmlWVmRyYkU5WVlpOW1jMmsyV1V4SmR6RXJNRTVpVjBKdFlYZG5NM1J1ZW5jeFUxQk5ja3c1V0ZaamVHaE5NMnR2ZEhwT1NEQXJUbkpQZGtSNFRGVjBiREJEUzJscFUxVlpMelp5TDNKbVVHRlFSSFpRYkc5dVRUSm9UbTFFYm5vclRITlNUbTVDZUVKTlREQTNkSFJCT0RSWlJqUlhNa2wwUlRCbk5HOTZjMUI2Y21rMVZYRlRjSEJEYjNwTFNFcG1Sa3g2VkVoWlVWcDRjM0p4YTJOek1tNVJibGhOWWtWaE1XeFBiblpVTVZWdk5WaEJOMHAzVnlJc0ltMWhZeUk2SWpjMU56Y3lOMlprWkRnMU5XUmtNalk0TW1WbU56QmtaakJtWXpsbFpUSmpZV0ZoWlRnMk1UUTJNek0zTWpoa00ySTRNekF4TmpRNVlUazNaalF5WmpnaUxDSjBZV2NpT2lJaWZRPT0,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "guidelines-for-offshore-concrete-structures",
                "title": "Guidelines for Offshore Concrete Structures",
                "docs": [
                    {
                        "id": "guidelines-for-offshore-concrete-structures-pt-10-vol-2-2020",
                        "label": "Guidelines for Offshore Concrete Structures ( Pt. 10, Vol.2 ) 2020",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJbkp6TWtGTlRXMDVhMFJvV1hKb1YxbE5aWGQwUzNjOVBTSXNJblpoYkhWbElqb2lMMWRPTURoSGRIQjZUbEl2Y1RkUVVFTkhVek5qV0dwWFZXWTNiWEpWZEdWclYwWktMMEYzTnpWQk1rVnZhMXBNY0U5R2NYZHNlRVZzTVVwVFdWWkpXbTkzZVdnMGFVa3dVblJNVVc5blRVMUtSVFJtU3l0Q2JFTldRbGsyTWtObGIyOXpOVTlpY3k5MFJFcENhMWRZVVZSU1QwZDVWbXQzWXpsS1R5OU9NU3MzU25WdGFuRlFlVWx0ZWtwRk0yVnZORU5NTHpKeGRqWkNMM1ZrYzFCUVNraFZNV1ZYYTFCeFNsRlJWVXBEVVRncldtVkRha1E0VDFFclJtSjRUMHRDUTNWbGEyaHNlR0YwZUdOTFYwMHJkWGMwVVhvMVRGTjJXa1JTWm5wcFQwUmFWV2dyVmxaVmNFUnZZejBpTENKdFlXTWlPaUprTWpJNU16azBNalU1TXpNMlpETTRORGMyT0dRNE1tVTNZamd4T1RJNE9XRTRNREF4TmprNFlqSTFaalJtWXprNU5URmhaVEU1T1dRd1pXWXlaV014SWl3aWRHRm5Jam9pSW4wPQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            },
            {
                "id": "petunjuk-konstruksi-dan-fasilitas-pelabuhan",
                "title": "Petunjuk Konstruksi dan Fasilitas Pelabuhan",
                "docs": [
                    {
                        "id": "petunjuk-konstruksi-dan-fasilitas-pelabuhan-pt-10-vol-a-2020",
                        "label": "Petunjuk Konstruksi dan Fasilitas Pelabuhan ( Pt. 10, Vol.A ) Jan 2020",
                        "href": "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJalp6YTNacWRIbFNkbTh5Tkc1alRHWlllWHBMZEhjOVBTSXNJblpoYkhWbElqb2lZVWxZSzI0MmRtcGlSbG8xWXpGNGMyRk9WbkpZUkVOUlJ6ZDZVVlZpVTA5b1NqZ3hRWEZLVEVGUFlUUkZObkJZYWtSRlZtMURWVUl3Y1VselRIUmxlRTgwUVcwcmEwdFVWV1JCY0hsc1VsSnpLMFZwTTBVMWRreFNhMlJzU1VzMFdFcDJMMFZNUTFGemRIbFJRMmhxTTNRNWRrcDJObHBPTTB0eVpEVnVWV2xQVVhNMmFGSnRVRTVvWmxsNWRWWk9NbWxETTAwMVQxVlJRaTkxWlVOclRVeHNZWGd2S3pKcEwwdElaMWRuY1ZSc01uWlpOakI1VEdkSFVuaHpka3ROTVZkSldYZFdWbU13VkhnclZHeDZaRkJuY1hWSWExVk9SbEZ0ZEZseUszZHNXVmRyUm5GQllVMDJRVDBpTENKdFlXTWlPaUkyT1Rnd05EUTFNVGMzT0RKa05EQXdZalpsTldReE1ERXdabUptTURreU5ESXpabUpsTkRWa01ETTBOV0UxTkRjNU1HUTBObVJrWmpsak1UWXdOVGswSWl3aWRHRm5Jam9pSW4wPQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1"
                    }
                ]
            }
        ]
    }
];

export default function DocumentSection() {
    // buka/tutup untuk level 1 dan level 2
    const [openTop, setOpenTop] = useState<Record<string, boolean>>({});
    const [openSub, setOpenSub] = useState<Record<string, boolean>>({});

    const toggleTop = useCallback(
        (id: string) => setOpenTop((s) => ({...s, [id]: !s[id]})),
        []
    );
    const toggleSub = useCallback(
        (id: string) => setOpenSub((s) => ({...s, [id]: !s[id]})),
        []
    );

    return (
        <section
            className="relative 2xl:px-28 xl:px-24 lg:px-20 px-4 2xl:py-20 lg:py-16 py-12 bg-white flex flex-col gap-4">
            {DATA.map((sec) => {
                const isOpenTop = openTop[sec.id];
                return (
                    <div
                        key={sec.id}
                        className="rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white"
                    >
                        {/* Part Header */}
                        <div className="bg-gradient-to-r from-[#0A436A] to-[#145d8a] px-4">
                            <Accordion
                                icon={<FolderOpen size={20} color={"white"}/>}
                                title={sec.title}
                                description=""
                                isOpen={isOpenTop}
                                onToggle={() => toggleTop(sec.id)}
                                titleClass="!text-white text-xl font-semibold"
                                iconClass="!text-white"
                                descriptionClass="hidden"
                            />
                        </div>

                        {/* Subgroups */}
                        {isOpenTop && (
                            <div className="divide-y divide-gray-100 bg-gray-50">
                                {sec.groups.map((grp) => {
                                    const isOpenSub = openSub[grp.id];
                                    return (
                                        <div key={grp.id} className="bg-white">
                                            <div className="bg-gray-100 px-4">
                                                <Accordion
                                                    icon={<BookOpen size={18}/>}
                                                    title={grp.title}
                                                    description=""
                                                    isOpen={isOpenSub}
                                                    onToggle={() => toggleSub(grp.id)}
                                                    titleClass="!text-gray-800 text-base"
                                                    iconClass="!text-[#0A436A]"
                                                    descriptionClass="hidden"
                                                />
                                            </div>

                                            {isOpenSub && (
                                                <div className="grid gap-3 px-6 py-4 md:grid-cols-2">
                                                    {grp.docs.map((doc) => (
                                                        <Link
                                                            key={doc.id}
                                                            href={doc.href ?? "#"}
                                                            target={"_blank"}
                                                            className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm transition hover:border-[#0A436A] hover:shadow-md"
                                                        >
                              <span className="flex items-center gap-3">
                                <FileText className="h-5 w-5 text-[#0A436A]"/>
                                <span className="text-sm font-medium text-gray-800 group-hover:underline">
                                  {doc.label}
                                </span>
                              </span>
                                                            {/* Year badge */}
                                                            {doc.label.match(/\b(19|20)\d{2}\b/) && (
                                                                <span
                                                                    className="ml-3 rounded-full bg-[#0A436A]/10 px-2 py-0.5 text-xs font-semibold text-[#0A436A]">
                                  {doc.label.match(/\b(19|20)\d{2}\b/)}
                                </span>
                                                            )}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                );
            })}
        </section>
    );
}
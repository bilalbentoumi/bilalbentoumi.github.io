import type { Metadata } from 'next';

import {
  ContactEmail,
  ExtLink,
  Intro,
  List,
  PolicyPage,
  Section,
} from '@/components/policy';
import { site } from '@/lib/content';

const UPDATED = 'November 6, 2026';

export const metadata: Metadata = {
  title: 'Zagzy — Privacy Policy',
  description:
    'How the Zagzy mobile game handles your data: local game saves and Google AdMob ads.',
};

export default function ZagzyPrivacyPolicy() {
  return (
    <PolicyPage app="Zagzy" updated={UPDATED}>
        <Intro>
          This Privacy Policy explains how the mobile game <strong className="text-cloud">Zagzy</strong>{' '}
          (&quot;the game&quot;), developed by {site.name} (&quot;I&quot;, &quot;me&quot;), handles
          information when you play it. In short: the game itself does not collect personal
          information. It shows ads from Google AdMob, and Google may collect some data to deliver
          those ads, as described below.
        </Intro>

        <Section title="Information the game stores on your device">
          <p>
            Zagzy saves a small file on your device containing your best score and your sound and
            music settings. This file never leaves your device: it is not sent to me or to anyone
            else. Uninstalling the game deletes it.
          </p>
          <p>
            Zagzy has no accounts, no sign-in, no chat, no in-app purchases and no analytics, and I
            do not collect your name, email address, contacts, photos or precise location.
          </p>
        </Section>

        <Section title="Advertising (Google AdMob)">
          <p>
            Zagzy is free and shows ads through Google AdMob, for example when you choose to watch an
            ad to continue a run. To serve and measure ads, and to prevent fraud, Google may collect
            and process information such as:
          </p>
          <List>
            <li>your device&apos;s advertising ID (Android Advertising ID)</li>
            <li>your IP address and approximate location derived from it</li>
            <li>device and app information (model, operating system, language, app version)</li>
            <li>ad interactions (ads viewed or tapped) and diagnostic data such as crash logs</li>
          </List>
          <p>
            This data is collected directly by Google, not by me, and is handled under Google&apos;s
            own policies:{' '}
            <ExtLink href="https://policies.google.com/privacy">Google Privacy Policy</ExtLink> and{' '}
            <ExtLink href="https://policies.google.com/technologies/partner-sites">
              How Google uses information from sites or apps that use its services
            </ExtLink>
            .
          </p>
        </Section>

        <Section title="Your choices and consent">
          <p>
            If you are in the European Economic Area, the United Kingdom or Switzerland, the game
            shows a consent form (Google&apos;s User Messaging Platform) before personalized ads are
            used. You can accept or refuse; if you refuse, you may still see non-personalized ads.
          </p>
          <p>
            On any Android device, you can reset or delete your advertising ID, or opt out of
            personalized ads, in your device settings under{' '}
            <span className="text-cloud">Settings → Privacy → Ads</span> (or{' '}
            <span className="text-cloud">Settings → Google → Ads</span>, depending on your device).
          </p>
        </Section>

        <Section title="Permissions">
          <p>
            The game requests internet and network-state access, and the advertising ID permission,
            only so that ads can be loaded and shown. The game itself works offline; ads, including
            the &quot;watch ad to continue&quot; option, need an internet connection.
          </p>
        </Section>

        <Section title="Children">
          <p>
            Zagzy is not directed at children under 13, and I do not knowingly collect personal
            information from children. If you believe a child has provided personal information
            through the game, contact me and I will help have it removed.
          </p>
        </Section>

        <Section title="Data security and retention">
          <p>
            Because the game does not send your data to me, I do not store any of it. Data collected
            by Google for advertising is retained and secured according to Google&apos;s policies
            linked above.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            I may update this Privacy Policy, for example if the game gains new features. Changes
            will be posted on this page with a new &quot;Last updated&quot; date.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about this policy or your data? Email me at{' '}
            <ContactEmail />
            .
          </p>
        </Section>
    </PolicyPage>
  );
}

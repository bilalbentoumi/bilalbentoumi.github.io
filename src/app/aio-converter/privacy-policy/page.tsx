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

export const metadata: Metadata = {
  title: 'AIO Converter — Privacy Policy',
  description:
    'AIO Converter does not collect, store, or share any personal data. Everything stays on your device.',
};

const localData = [
  {
    data: 'Preferences (language, theme, decimal precision, digit grouping)',
    purpose: 'Remember your settings between sessions',
  },
  { data: 'Favorite categories and last-used units', purpose: 'Speed up your conversions' },
  {
    data: 'Conversion history (up to 100 recent entries)',
    purpose: 'Let you review past conversions',
  },
  {
    data: 'Latest currency exchange rates',
    purpose: 'Allow currency conversion while offline',
  },
];

export default function AioConverterPrivacyPolicy() {
  return (
    <PolicyPage app="AIO Converter" updated="October 30, 2026">
      <Intro>
        This Privacy Policy explains how <strong className="text-cloud">AIO Converter</strong>{' '}
        (&quot;the app&quot;, &quot;we&quot;, &quot;us&quot;) handles your information. In short:
        the app does not collect, store, or share any personal data. Everything you do in the app
        stays on your device.
      </Intro>

      <Section title="1. Information we do not collect">
        <p>AIO Converter does not:</p>
        <List>
          <li>Require an account, sign-in, or registration</li>
          <li>Collect your name, email address, phone number, or any other contact details</li>
          <li>Access your location, contacts, camera, microphone, photos, or files</li>
          <li>Use analytics, crash-reporting, or tracking tools</li>
          <li>Show advertisements or use advertising identifiers</li>
          <li>Sell, rent, or share any data with third parties</li>
        </List>
      </Section>

      <Section title="2. Data stored on your device">
        <p>
          To make the app work, some data is saved locally on your device only. It is never sent to
          us or anyone else:
        </p>
        <div className="overflow-x-auto rounded-xl border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface font-mono text-xs uppercase tracking-wider text-mute">
              <tr>
                <th className="px-4 py-3 font-medium">Data</th>
                <th className="px-4 py-3 font-medium">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {localData.map((row) => (
                <tr key={row.data}>
                  <td className="px-4 py-3 text-cloud">{row.data}</td>
                  <td className="px-4 py-3">{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          You can clear your conversion history at any time from within the app. Uninstalling the
          app, or clearing its data from your device settings, permanently deletes all of the data
          above.
        </p>
      </Section>

      <Section title="3. Network requests">
        <p>The app connects to the internet only for the following purposes:</p>
        <List>
          <li>
            <strong className="text-cloud">Currency exchange rates.</strong> When you use the
            currency converter, the app downloads current exchange rates from{' '}
            <ExtLink href="https://www.exchangerate-api.com">ExchangeRate-API</ExtLink>{' '}
            (open.er-api.com). The request contains no personal information. As with any internet
            request, the provider can see your IP address. See their{' '}
            <ExtLink href="https://www.exchangerate-api.com/terms">privacy policy</ExtLink> for
            details.
          </li>
          <li>
            <strong className="text-cloud">App updates.</strong> The app may check for and download
            updates through Expo&apos;s update service. These requests include technical
            information such as the platform and app version, but no personal information. See{' '}
            <ExtLink href="https://expo.dev/privacy">Expo&apos;s privacy policy</ExtLink>.
          </li>
        </List>
        <p>All other features, including unit conversions, work fully offline.</p>
      </Section>

      <Section title="4. Children's privacy">
        <p>
          AIO Converter does not knowingly collect any information from anyone, including children
          under the age of 13. The app is safe for users of all ages.
        </p>
      </Section>

      <Section title="5. Security">
        <p>
          Because no personal data is collected or transmitted, there is no personal data on our
          side to be exposed. Data stored locally is protected by your device&apos;s own security
          features.
        </p>
      </Section>

      <Section title="6. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with an updated &quot;Last updated&quot; date. Continued use of the app after changes
          means you accept the revised policy.
        </p>
      </Section>

      <Section title="7. Contact">
        <p>
          If you have any questions about this Privacy Policy, please contact {site.name} at{' '}
          <ContactEmail />.
        </p>
      </Section>
    </PolicyPage>
  );
}
